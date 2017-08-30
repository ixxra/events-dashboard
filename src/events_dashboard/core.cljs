(ns events-dashboard.core
  (:require [reagent.core :as reagent :refer [atom]])
  (:import [goog.date DateTime Date Interval]))

(enable-console-print!)

(defonce app-state (atom {:text "Calendario"}))

(def date-state (Date.))
(def users ["Marco" "Carlos" "Minerva"])
(def re-events {"Marco" {"20170803" {:date "20170803" :name "Clases" :desc "Clases" :loc "Fmat"}}})

(defn currentCal [date]
  (let [month (.getMonth date)
        year (.getFullYear date)
        firstDay  (mod (- (.getDay (Date. year month 1)) 1) 7)
        totalDays (.getNumberOfDaysInMonth date)
        totalWeeks (Math/ceil (/ (+ firstDay totalDays) 7))]
    {:year year :month month :firstDay firstDay
     :totalDays totalDays
     :totalWeeks totalWeeks}))

(defn split-date-string [date]
  (let [d (Date. date)]
    {:year (.getYear d) :month (.getMonth d)}))


(defn event-in-cal? [event cal-year cal-month]
  (let [s (split-date-string (:date event))]
    (and (= (:year s) cal-year) (= (:month s) cal-month))))


(defn monthName [number]
  (case number
    0 "Enero"
    1 "Febrero"
    2 "Marzo"
    3 "Abril"
    4 "Mayo"
    5 "Junio"
    6 "Julio"
    7 "Agosto"
    8 "Septiembre"
    9 "Octubre"
    10 "Noviembre"
    11 "Diciembre"))

(defn mycal [totalDays offset]
  (concat (repeat offset "") (range 1 (+ totalDays 1)) (repeat "")))

(defmacro thead []
  [:thead
   [:tr.weekdays
    [:th ""]
    [:th ""]
    [:th "Lunes"]
    [:th "Martes"]
    [:th "Miercoles"]
    [:th "Jueves"]
    [:th "Viernes"]
    [:th "Sabado"]
    [:th "Domingo"]]])


(defn cal-picker [cal d]
  (let [;d (Date.)
        reset-cal (fn [] (reset! cal (currentCal d)))
        up (fn [] (do (.add d (Interval. 0 1))
                      (reset-cal)))
        down (fn [] (do (.add d (Interval. 0 -1))
                        (reset-cal)))
        today (fn [] (do (.set d (Date.))
                         (reset-cal)))]
    (fn [] 
      [:div.row
       [:div.col-sm-8 [:h3 (monthName (:month @cal)) " " (:year @cal)]]
       [:div.col-sm-4
        [:div.btn-toolbar.float-right
         [:input.btn.btn-primary {:type "button"  :value "<"
                                  :on-click down}]
         [:input.btn.btn-success {:type "button"  :value "Hoy"
                                  :on-click today}]
         [:input.btn.btn-primary {:type "button" :value ">"
                                  :on-click up}]]]])))


(defn format-event [ev]
  (let [formatted (str (ev "name") "<br />" (ev "desc") "&#xa;Ubicación: " (ev "loc"))]
    {:dangerouslySetInnerHTML {:__html formatted}}
    formatted))

(defn static-cell
  ([] [:td])
  ([event] [:td {:data-balloon (format-event event)
                 :data-balloon-pos "up"
                 :data-balloon-length "large"
                 :data-html true
                 :style {:background-color (event "color")
                         :color "white"}}
            (event "name")]))


(defn event-cell [events year month day]
  (let [k (.toString (Date. year month day))]
    (if (contains? events k)
      [static-cell (events k)]
      [static-cell])))

(defn week-block [offset start end users events cal]
  (let [pre-cal (repeat offset [:td])
        month (:month @cal)
        year (:year @cal)]
    (list
     [:tr [:td.weekdays] [:td.weekdays] (repeat offset [:td.weekdays])
      (for [i (range start (+ 1 end))] [:td.weekdays.text-right i])]
     [:tr [:td.align-middle.text-center.bg-info.text-white {:rowSpan (count users)} "Matutino"] [:td (first users)]
      pre-cal
      (for [i (range start (+ 1 end))] (event-cell (events (first users)) year month i))]
     (for [u (rest users)]
       [:tr [:td u] pre-cal
        (for [i (range start (+ 1 end))] (event-cell (events u) year month i))])
     
     [:tr [:td.align-middle.text-center.bg-warning.text-white {:rowSpan (count users)} "Vespertino"] [:td (first users)]
      pre-cal
      (for [i (range start (+ 1 end))] (event-cell (events (first users)) year month i))]
     (for [u (rest users)]
       [:tr [:td u] pre-cal
        (for [i (range start (+ 1 end))] (event-cell (events u) year month i))]))))

(defn cal-frame [users cal events]
  (let [days (mycal (:totalDays @cal) (:firstDay @cal))
        weeks (take (:totalWeeks @cal) (partition 7 days))
        morning-header [:td {:rowSpan (count users)} "Matutino"]
        noon-header [:td {:rowSpan (count users)} "Vespertino"]
        pre-cal (repeat (:firstDay @cal) [:td])
        month (:month @cal)
        year (:year @cal)]
    
    [:table.table.table-bordered
     [thead]
     [:tbody
      (week-block (:firstDay @cal) 1 (- 7 (:firstDay @cal)) users events cal)
      (for [i (range (- 8 (:firstDay @cal)) (+ 1 (:totalDays @cal)) 7)]
        (let [end (min (+ 6 i) (:totalDays @cal))]
          (week-block 0 i end users events cal)))]]))
      
(defn cal-frame-old [users cal]
  (let [days (mycal (:totalDays @cal) (:firstDay @cal))
        weeks (take (:totalWeeks @cal) (partition 7 days))]
    [:table.table.table-bordered
     [thead]
     [:tbody
      (for [w weeks]
        (concat
         [[:tr [:td] [:td] (map #(-> [:td.text-sm-right % ]) w)]];Week days
         [[:tr [:td {:rowSpan (count users)} "Matutino"][:td (first users)] (repeat 7 [static-cell {:name "Visita" :desc "Visita academica\nEducacion y patria"}])]]
         (for [u (rest users)] [:tr [:td u]  (repeat 7 [:td])])
         [[:tr [:td {:rowSpan (count users)} "Vespertino"][:td (first users)] (repeat 7 [:td])]]
         (for [u (rest users)] [:tr [:td u]  (repeat 7 [:td])])))]]))


(defn calendar [users events]
  (let [d date-state
        cal (atom (currentCal d))]
    [:div.cal.container
     [:div.header.toolbar
      [cal-picker cal d]]
     [cal-frame users cal events]]))


(defn dashboard [users events]
  [:div
   [:h1.text-center (:text @app-state)]
   [calendar users events]])


(defn random-color-string [&_]
  (let [r (rand-int 255)
        g (rand-int 255)
        b (rand-int 255)]
    (str "rgb(" r "," g "," b ")")))

(defn inject-color-events [users-events]
  (let [ids (for [[u events] users-events
                  [d w] events] (w "name"))
        color (into {} (zipmap ids (map random-color-string ids)))]
    (into {} (for [[u events] users-events]
               [u (into {} (for [[d w] events]
                             [d (assoc w "color" (color (w "name")))]))] ))))


(reagent/render-component [dashboard
                           (js->clj (.-users js/document))
                           (inject-color-events (js->clj(.-events js/document)))]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
