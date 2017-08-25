(ns events-dashboard.core
  (:require [reagent.core :as reagent :refer [atom]])
  (:import [goog.date DateTime]))

(enable-console-print!)

(println "This text is printed from src/events-dashboard/core.cljs.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Calendario de actividades"}))


(defn currentCal []
  (let [now (DateTime.)
        month (.getMonth now)
        year (.getFullYear now)
        firstDay  (- (.getDay (js/Date. year month 1)) 1)
        totalDays (.getNumberOfDaysInMonth now)
        totalWeeks (Math/ceil (/ totalDays 7))]
    {:year year :month month :firstDay firstDay
     :totalDays totalDays
     :totalWeeks totalWeeks}))


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


(defn cell []
  [:td])

;; (defn cal-frame-2 [weeks totalDays offset]
;;   (let [cells (repeat offset [cell]) (repeat totalDays [cell]) (repeat )]
;;     cells))

(def users ["Marco" "Carlos" "Minerva"])
(def cal (currentCal))

(defn mycal [totalDays offset]
  (concat (repeat offset "") (range 1 (+ totalDays 1)) (repeat "")))


(defmacro thead []
  [:thead
   [:tr
    [:th ""]
    [:th ""]
    [:th "Lunes"]
    [:th "Martes"]
    [:th "Miercoles"]
    [:th "Jueves"]
    [:th "Viernes"]
    [:th "Sabado"]
    [:th "Domingo"]]])


(defn cal-frame [users cal]
  (let [days (mycal (:totalDays cal) (:firstDay cal))
        weeks (take (:totalWeeks cal) (partition 7 days))]
    [:table.table.table-bordered
     [thead]
     [:tbody
      (for [w weeks]
        (concat
         [[:tr [:td] [:td] (map #(-> [:td.text-sm-right % ]) w)]]
         [[:tr [:td {:rowSpan (count users)} "Matutino"][:td (first users)] (repeat 7 [:td])]]
         (for [u (rest users)] [:tr [:td u]  (repeat 7 [:td])])
         [[:tr [:td {:rowSpan (count users)} "Vespertino"][:td (first users)] (repeat 7 [:td])]]
         (for [u (rest users)] [:tr [:td u]  (repeat 7 [:td])])))]]))



;; (defn cal-frame [weeks totalDays offset]
;;   (let [head (repeat offset [:td])
;;         days (mapv (fn [d] [:td d]) (range 1 (+ totalDays 1)))
;;         tail (repeat (- (* 7 weeks) offset totalDays) [:td])]
;;     [:div.cal-frame
;;      (into [] (concat [:table.table]
;;                       (mapv (fn [row](into [] (concat [:tr] row))) (partition 7 (concat head days tail)))))]))


(defn calendar []
  (let [cal (currentCal)]
    [:div.cal.container
     [:div.header.toolbar
      [:div
       [:a.btn.btn-primary {:href "#"} "<"]
       [:div.btn.btn-default (monthName (:month cal)) " " (:year cal)]
       [:a.btn.btn-primary {:href "#"} ">"]]]
     [cal-frame users cal]]))


(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [calendar]])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
