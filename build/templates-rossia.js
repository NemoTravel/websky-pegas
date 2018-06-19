!function(e){try{e=angular.module("app")}catch(s){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/es-meal/es-meal.html",'<div class="item__i mobileHide item__i_test" style="display: none"><div class="top"><div class="icon" ng-class="{ not: (!vm.service.editablePrice && !vm.service.active) }"><span style="display: none">{{ vm.service.editablePrice }}</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="29" viewbox="0 0 41 29"><g><g transform="translate(-943 -1951)"><image width="41" height="29" transform="translate(943 1951)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAdCAYAAAA3i0VNAAACAElEQVRYR+2YPWgUURSFvyPxB9SksNAujaD4BxYWYidYCJZCwEQMBhJSKVhFIaKgVoKWBgwRY0CwDDaCnaSwCMQfFNKkM4VgTASTSI68ZbOsk9nszO5MdgpvO/ee88197743jMgobJ8CHgCHgS/AkKT3WcgrCxHbncBHYE+V3hJwTNJcsx5ZQd4E7sXA3JJ0vyiQd4DhGJi7km63FNJ2G3AS6AJuxMA8BF4C05L+NAqberltbwMuAN3AeWBvAvNF4DUwAUxKWktQU0lJDFmGuwSE5TuYxiSSOwuE7TGRFDYRpO1DwFPgTBNw0dJ3QJ+kr/U060LavgiMAbvriTXw/BfQK+nVZrWbQtq+BjxqwDxtyXVJj2sV1YS03Q88SevWRP6ApJG4+lhI22eBN0CY5K2KMPHnJL2NGm6AtL0P+ATs3yq6Kp954Kik79XecZBhiq+2AHDdclRSX01I20fKHwp1pz7Hl3D5w+Tzusc/MLafAz05AiSVHpd0eQOk7Q7gG7ArqVKOeb+BA5IWgkelk7bDXTyeo3Fa6R5JL6KQ4Va5klYpx/xnknqjkDPA8RxN00p/kHQiCrkCbE+rlGP+qqQdFUjb7UBpkxYsOiT9LA2O7Z3A6YIBBpwpScutPLQT90S2B4HQyaLGcoD8AYSDvKix8B8yo6UpdTL8Bin0cv8FInOaKdy3fMsAAAAASUVORK5CYII="></image></g></g></svg></div><div class="name"><h2 class="name__heading">{{ \'web.extraServices.meal.header\' | aliasStatic}} <span class="name__min-price" ng-if="vm.service.minPrice">{{ \'web.extraServices.minPrice\' | aliasStatic}} <span ng-bind-html="{ value: vm.service.minPrice.price, currency: vm.service.minPrice.currency } | price"></span></span></h2><p class="name__description">{{ \'web.extraServices.meal.desc\' | aliasStatic}}</p></div><div class="info" ng-if="vm.service.editablePrice"><a class="info__close-icon" ng-if="!vm.service.active" ng-click="vm.removePassengerFlightMeal(vm.selectedPassenger, vm.selectedFlight)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="20" viewbox="0 0 19 20"><g><g transform="translate(-1496 -891)"><image width="19" height="20" transform="translate(1496 891)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAACxUlEQVQ4T5WUTUhUURTH/+fNJE9qpiAKIyjokz5p0cJFBLOQeec1FhFpQZsgKAKxlUQSjbWQggoiTBKKatWjGMrex6g19AEK2aZV0MbaRVaQCILvzok7zJPxMaLd5b3/+7vn438PYQkrn88b+Xy+vJiU6glc191GRKeIKAdgF4AGADMAPhPRKxF5wswT8bvzYKVSacXMzMx1AG0icl9EXiYSia+WZf0uFovLlVL7ABwlotMAHpimeTmTyehHKmsONjg4uD6ZTHoAxpRSF3O53J+F0ioWi2uVUreJaJOIHLZt++cczPO8NIBxIupn5luL1SY6933/GgA2TfOAjrASme/7AwDKzHx2qaAa4FMA35i5i3zf3w7gnYhstW37bxX+GMAjZn4dhwdBcARA1rKs8/rM87w1RPQlDMO9FARBj4gsY+ZL0UXXdQ8ahvEcwIlaoAbpxhiGYWez2U+RPgiCPhH5qiMbB9DBzKO1UVSBzwCc1MCFQNVMbBG5oGGTIrIj6kg9IBHdE5Fz8Ygi7dDQ0FallKdhwsx1zVt99QqAPIBOZr5Tr0GFQmGVaZoTGjYtIuui4teKo9SI6KqIaGgl5TjQdd2NhmF80LBREem2bftNPVCUWryGMe0xETlDnud1A2iybbujxjuHAQzEaxQBiajdsqxSjV5baYyGh4c3hGH4UUR2R03wff+uYRgPa9sfs01Om1TvVe+Ph2G4M/oBNwBsZOb2//kBjuMkUqmUC+AtM/dWYI7jNKbT6ZKIvLcsq4uIZDGonnHNzc39IrLZNM1sJpMJ5ywxMjKyenZ2tkBEvxKJRGdLS8v3hYBBEGwpl8t9RKREpD1ywjx/OY7TkEqleojonIi8APBCKfUlmUz+IKKV5XJ5f3WesYjcnJqa6m1ra1PRowtN2iYiOk5EhwDsAdAIYFpPWgAvwzB83traOhmP/B+Al3B/w3iTlgAAAABJRU5ErkJggg=="></image></g></g></svg></a> <span class="info__text">Всего к оплате:</span> <span ng-bind-html="{ value: vm.service.editablePrice.price, currency: vm.service.editablePrice.currency } | price"></span></div><div class="buttons"><a href="" class="toggle" ng-if="vm.service.active || vm.service.editablePrice" ng-click="vm.service.active = !vm.service.active" ng-class="{ open: vm.service.active}"><span class="show">Показать</span> <span class="hide">Скрыть</span></a> <a href="" class="btn" ng-click="vm.switchService()" ng-if="!vm.service.active && !vm.service.editablePrice">Выбрать питание</a> <a href="" class="btn done" ng-click="vm.switchService()" ng-if="!vm.service.active && vm.service.editablePrice"><span class="btn__icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="8" viewbox="0 0 11 8"><g><g transform="translate(-1909 -2063)"><image width="11" height="8" transform="translate(1909 2063)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAlUlEQVQoU2NkIAK0n9eN/s/A2MxISC1U4XxGhv+JeBWDFTIyzmH4xxBeZXRpE07FbRf00xkY/k+AKQS5gLHtvN5DRob/VZWGl5fCnNR2Ti+TgZFhAsN/hlCQiTBxxrZzen4MTAwrGf//TwFpwKUQbDKIAGtgZFjN8J9hPQMjQyC6iXCTkawG2TCTkYExvtLg4i5soQQAlE88SKn3kiMAAAAASUVORK5CYII="></image></g></g></svg></span> Выбрано</a></div></div><div class="drop" ng-class="{ active: vm.service.active, show_js: vm.service.active }"><div class="drop__i"><div class="route"><div class="route__flights-panel"><div class="route__title">Выбор питания на рейсе</div><div class="route__buttons"><a ng-repeat="(flightNum, flight) in vm.orderInfo.plainFlights" ng-click="vm.service.availableBySegments[flightNum] && vm.selectFlightPassenger(flightNum, 0)" ng-class="{ active: vm.selectedFlight == flightNum && vm.service.availableBySegments[flightNum] }" href="">{{ flight.origincityName }}</a></div></div><div class="route__cancel"><a href="" class="route__link-cancel"><span class="route__icon-cancel"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="20" viewbox="0 0 19 20"><g><g transform="translate(-1496 -891)"><image width="19" height="20" transform="translate(1496 891)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAACxUlEQVQ4T5WUTUhUURTH/+fNJE9qpiAKIyjokz5p0cJFBLOQeec1FhFpQZsgKAKxlUQSjbWQggoiTBKKatWjGMrex6g19AEK2aZV0MbaRVaQCILvzok7zJPxMaLd5b3/+7vn438PYQkrn88b+Xy+vJiU6glc191GRKeIKAdgF4AGADMAPhPRKxF5wswT8bvzYKVSacXMzMx1AG0icl9EXiYSia+WZf0uFovLlVL7ABwlotMAHpimeTmTyehHKmsONjg4uD6ZTHoAxpRSF3O53J+F0ioWi2uVUreJaJOIHLZt++cczPO8NIBxIupn5luL1SY6933/GgA2TfOAjrASme/7AwDKzHx2qaAa4FMA35i5i3zf3w7gnYhstW37bxX+GMAjZn4dhwdBcARA1rKs8/rM87w1RPQlDMO9FARBj4gsY+ZL0UXXdQ8ahvEcwIlaoAbpxhiGYWez2U+RPgiCPhH5qiMbB9DBzKO1UVSBzwCc1MCFQNVMbBG5oGGTIrIj6kg9IBHdE5Fz8Ygi7dDQ0FallKdhwsx1zVt99QqAPIBOZr5Tr0GFQmGVaZoTGjYtIuui4teKo9SI6KqIaGgl5TjQdd2NhmF80LBREem2bftNPVCUWryGMe0xETlDnud1A2iybbujxjuHAQzEaxQBiajdsqxSjV5baYyGh4c3hGH4UUR2R03wff+uYRgPa9sfs01Om1TvVe+Ph2G4M/oBNwBsZOb2//kBjuMkUqmUC+AtM/dWYI7jNKbT6ZKIvLcsq4uIZDGonnHNzc39IrLZNM1sJpMJ5ywxMjKyenZ2tkBEvxKJRGdLS8v3hYBBEGwpl8t9RKREpD1ywjx/OY7TkEqleojonIi8APBCKfUlmUz+IKKV5XJ5f3WesYjcnJqa6m1ra1PRowtN2iYiOk5EhwDsAdAIYFpPWgAvwzB83traOhmP/B+Al3B/w3iTlgAAAABJRU5ErkJggg=="></image></g></g></svg></span> <span>Отменить услугу</span></a></div></div><div class="col" style="display: none"><div class="col__item"><div ng-repeat="(segNum, segment) in vm.orderInfo.flights" class="flight"><div class="route_item_container" ng-repeat="(flightNum, flight) in segment.flights"><div class="route_item"><div class="route__i route_container"><div class="route_table"><div class="dep"><div class="dep__date" ng-class="{ nextDay: flight.departuredayshift, attention: flight.departuredayshift}">{{ flight.departuredate | formatDate: \'D MMM, dd\' }} -- {{ flight.departuretime }}</div><div>{{ flight.origincityName }} -- {{ flight.originport }}</div></div><div>-------------</div><div class="arr"><div class="arr__date" ng-class="{ nextDay: flight.arrivaldayshift, attention: flight.arrivaldayshift}">{{ flight.arrivaldate | formatDate: \'D MMM, dd\' }} -- {{ flight.arrivaltime }}</div><div>{{ flight.destinationcityName }} -- {{ flight.destinationport }}</div></div></div></div></div></div></div></div></div><div class="flightsInfo"><div class="flightsInfo__way"><div class="flightsInfo__title"><span ng-if="vm.orderInfo.header.regnum">{{ vm.orderInfo.header.regnum }}</span></div><div class="flightsInfo__wrap"><div ng-repeat="(segNum, segment) in vm.orderInfo.flights" class="flightsInfo__segments"><div ng-repeat="(flightNum, flight) in segment.flights"><div class="flightsInfo__segment"><div class="flightsInfo__city"><span class="flightsInfo__city-name">{{ flight.origincityName }}</span> <span class="flightsInfo__city-code">{{ flight.originport }}</span></div><div class="flightsInfo__date">в {{ flight.departuredate | formatDate: \'D MMM, dd\' }} {{ flight.departuretime }}</div></div><div class="flightsInfo__segment"><div class="flightsInfo__city"><span class="flightsInfo__city-name">{{ flight.destinationcityName }}</span> <span class="flightsInfo__city-code">{{ flight.destinationport }}</span></div><div class="flightsInfo__date">в {{ flight.arrivaldate | formatDate: \'D MMM, dd\' }} {{ flight.arrivaltime }}</div></div></div></div></div></div></div><div class="food"><div class="passengers"><div ng-repeat="(flightNum, flight) in vm.orderInfo.plainFlights" ng-if="vm.service.availableBySegments[flightNum] && vm.selectedFlight == flightNum"><div ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-init="mealSelect = vm.orderInfo.groupedEditableExtraServices.meal[passengerNum][flightNum]"><div class="passenger" ng-if="passenger.hasSeats"><div class="passenger__name" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" ng-class="{ focus: passengerNum === vm.selectedPassenger, notChoice: !mealSelect && vm.service.availableByPassengerSegments[passengerNum] }">{{ passenger.lastName }} {{ passenger.firstName }}</div><div ng-if="mealSelect" class="passenger__meal" ng-repeat="(indexMealSelect, itemMealSelect) in mealSelect track by $index"><div>{{ itemMealSelect.title }}</div><div class="passenger__price"><span ng-bind-html="{ value: itemMealSelect.totalPrice, currency: itemMealSelect.currency } | price"></span> <a href="" ng-if="mealSelect" ng-click="" class="remove"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="20" viewbox="0 0 19 20"><g><g transform="translate(-1496 -891)"><image width="19" height="20" transform="translate(1496 891)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAACxUlEQVQ4T5WUTUhUURTH/+fNJE9qpiAKIyjokz5p0cJFBLOQeec1FhFpQZsgKAKxlUQSjbWQggoiTBKKatWjGMrex6g19AEK2aZV0MbaRVaQCILvzok7zJPxMaLd5b3/+7vn438PYQkrn88b+Xy+vJiU6glc191GRKeIKAdgF4AGADMAPhPRKxF5wswT8bvzYKVSacXMzMx1AG0icl9EXiYSia+WZf0uFovLlVL7ABwlotMAHpimeTmTyehHKmsONjg4uD6ZTHoAxpRSF3O53J+F0ioWi2uVUreJaJOIHLZt++cczPO8NIBxIupn5luL1SY6933/GgA2TfOAjrASme/7AwDKzHx2qaAa4FMA35i5i3zf3w7gnYhstW37bxX+GMAjZn4dhwdBcARA1rKs8/rM87w1RPQlDMO9FARBj4gsY+ZL0UXXdQ8ahvEcwIlaoAbpxhiGYWez2U+RPgiCPhH5qiMbB9DBzKO1UVSBzwCc1MCFQNVMbBG5oGGTIrIj6kg9IBHdE5Fz8Ygi7dDQ0FallKdhwsx1zVt99QqAPIBOZr5Tr0GFQmGVaZoTGjYtIuui4teKo9SI6KqIaGgl5TjQdd2NhmF80LBREem2bftNPVCUWryGMe0xETlDnud1A2iybbujxjuHAQzEaxQBiajdsqxSjV5baYyGh4c3hGH4UUR2R03wff+uYRgPa9sfs01Om1TvVe+Ph2G4M/oBNwBsZOb2//kBjuMkUqmUC+AtM/dWYI7jNKbT6ZKIvLcsq4uIZDGonnHNzc39IrLZNM1sJpMJ5ywxMjKyenZ2tkBEvxKJRGdLS8v3hYBBEGwpl8t9RKREpD1ywjx/OY7TkEqleojonIi8APBCKfUlmUz+IKKV5XJ5f3WesYjcnJqa6m1ra1PRowtN2iYiOk5EhwDsAdAIYFpPWgAvwzB83traOhmP/B+Al3B/w3iTlgAAAABJRU5ErkJggg=="></image></g></g></svg></a></div></div><div class="meal-passenger" ng-if="vm.orderInfo.groupedIssuedExtraServices.meal[passengerNum][flightNum].length" ng-repeat="issuedMealItem in vm.orderInfo.groupedIssuedExtraServices.meal[passengerNum][flightNum]"><span>{{ \'web.extraServices.\' + issuedMealItem.rfisc + \'.\' + issuedMealItem.serviceType +\'.ALL.text\' | aliasDynamic }}</span> <span class="passengersTable__segment-passengers__passenger__meals__issued">{{ \'web.serviceStatus.issued\' | aliasStatic }}</span></div></div></div></div></div><div class="food__menu"><div class="group" ng-if="vm.service.subgroups.length > 1"><div class="group__item" ng-init="vm.mealMenuSubgroup ? \'0\' : vm.mealMenuSubgroup" ng-repeat="(subgroupNum, subgroupCode) in vm.service.subgroups" ng-class="{ active: vm.mealMenuSubgroup === subgroupNum }" ng-click="vm.mealMenuSubgroup = subgroupNum"><span class="group__icon group__icon_chicken" ng-if="subgroupCode == \'chicken\'"></span> <span class="group__icon group__icon_meat" ng-if="subgroupCode == \'meat\'"></span> <span class="group__text">{{ \'web.meal.subgroup.\' | aliasWithPrefix:subgroupCode }}</span></div></div><div class="list customScroll_height customScroll_js" custom-scroll=""><div class="list__i isotopeGrid"><wrap ng-repeat="(subgroupNum, subgroup) in vm.mealMenu"><div ng-repeat="mealItem in subgroup" ng-if="vm.mealMenuSubgroup === subgroupNum || vm.mealMenuSubgroup === false" ng-class="{ active: mealItem.alreadySelectedCount > 0 }" class="item"><div class="food_wrap"><div class="img"><div class="food__counter" ng-if="mealItem.alreadySelectedCount > 0"><span class="btn__icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="8" viewbox="0 0 11 8"><g><g transform="translate(-1909 -2063)"><image width="11" height="8" transform="translate(1909 2063)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAlUlEQVQoU2NkIAK0n9eN/s/A2MxISC1U4XxGhv+JeBWDFTIyzmH4xxBeZXRpE07FbRf00xkY/k+AKQS5gLHtvN5DRob/VZWGl5fCnNR2Ti+TgZFhAsN/hlCQiTBxxrZzen4MTAwrGf//TwFpwKUQbDKIAGtgZFjN8J9hPQMjQyC6iXCTkawG2TCTkYExvtLg4i5soQQAlE88SKn3kiMAAAAASUVORK5CYII="></image></g></g></svg></span></div><img ng-src="{{vm.mealImagesPath}}/{{ mealItem.serviceType }}-{{ mealItem.rfisc }}.jpg" alt=""></div><p class="description" ng-bind-html="mealItem.description"></p><p class="price" ng-bind-html="{ value: mealItem.price, currency: mealItem.currency } | price"></p><a href="" class="btn" ng-click="vm.mealCountChangeHandler(subgroupNum, mealItem, +1)" ng-class="{ selected: mealItem.alreadySelectedCount > 0}"><span class="not-selected" ng-if="mealItem.alreadySelectedCount === 0">Выбрать</span> <span class="selected" ng-if="mealItem.alreadySelectedCount > 0">Добавлено в заказ</span></a></div></div></wrap></div></div></div></div></div></div></div><div class="item__i mobileHide"><div class="top"><div class="top__i"><table><tbody><tr><td><div class="text"><div class="iconBox" ng-click="vm.switchService()"><i class="icon_meal"></i></div><div class="name"><h2>{{ \'web.extraServices.meal.header\' | aliasStatic}} <a href="" fancybox="popupAlias" data-popup-alias="web.extraServicesRules.meal"><span class="infoBoxWrap"><i class="icon_info"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.extraServices.serviceDesc\' | aliasStatic}}</span></span></span></a></h2><p>{{ \'web.extraServices.meal.desc\' | aliasStatic}}</p></div></div></td><td><div ng-if="vm.service.active && vm.service.editablePrice" class="price"><div class="price__i"><h3 ng-bind-html="{ value: vm.service.editablePrice.price, currency: vm.service.editablePrice.currency } | price"></h3></div></div><div ng-if="!vm.service.active && vm.service.minPrice" class="price"><div class="price__i"><p>{{ \'web.extraServices.minPrice\' | aliasStatic}}</p><h3 ng-bind-html="{ value: vm.service.minPrice.price, currency: vm.service.minPrice.currency } | price"></h3></div></div></td><td><a href="" ng-click="vm.switchService()" ng-if="!vm.checkServiceRemovalProhibited(\'meal\')" ng-class="{ active: vm.service.active, control_disabled: vm.locked }" class="btn showDrop_js"><span class="show">{{ \'web.extraServices.meal.select\' | aliasStatic}}</span> <span class="hide">{{ \'web.extraServices.meal.deselect\' | aliasStatic}}</span></a></td></tr></tbody></table></div></div><div class="drop" ng-class="{ active: vm.service.active, show_js: vm.service.active }"><div class="drop__i"><div class="foodSelect"><div class="foodSelect__i"><table class="passengersTable"><tbody><tr class="headRow"><td class="firstCol"></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers">{{ passenger.lastName }} {{ passenger.firstName }}</td></tr><tr ng-repeat-start="(flightNum, flight) in vm.orderInfo.plainFlights" class="contentRow"><td class="firstCol"><div class="date">{{ flight.date | formatDate: \'D MMMM, dd\'}}</div><div class="route"><geo-marker prefix="dep__point" key="es-meal" city="flight.origincity" cityname="flight.origincityName" port="flight.originport" portname="flight.originportName"></geo-marker><div class="route__plane"><i class="icon_plane"></i></div><geo-marker prefix="arr__point" key="es-meal" city="flight.destinationcity" cityname="flight.destinationcityName" port="flight.destinationport" portname="flight.destinationportName"></geo-marker></div></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-class="{ active: vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum }" ng-init="selectedPassengerFlightMeal = vm.getSelectedPassengerFlightMeal(passengerNum, flightNum)"><wrap ng-if="vm.service.availableByPassengerSegments[passengerNum][flightNum]"><a href="" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" class="passengersTable__link" ng-class="{ passengersTable__link_empty: !selectedPassengerFlightMeal, passengersTable__link_select: (!selectedPassengerFlightMeal && vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum) }"><wrap ng-if="!selectedPassengerFlightMeal && (vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum)">{{ \'web.extraServices.meal.selectItem\' | aliasStatic}}</wrap><wrap ng-if="!selectedPassengerFlightMeal && !(vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum)">{{ \'web.extraServices.meal.noneSelected\' | aliasStatic}}</wrap><wrap ng-if="selectedPassengerFlightMeal">{{ selectedPassengerFlightMeal.count }} - <span ng-bind-html="{ value: selectedPassengerFlightMeal.cost, currency: selectedPassengerFlightMeal.currency } | price"></span></wrap></a> <a ng-if="selectedPassengerFlightMeal && !vm.checkServiceRemovalProhibited(\'meal\', passengerNum, flightNum)" href="" ng-click="vm.removePassengerFlightMeal(passengerNum, flightNum)" class="btn-remove"><span class="infoBoxWrap"><i class="icon_remove"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.extraServices.meal.cancelByPassengerSegment\' | aliasStatic }}</span></span></span></a></wrap><wrap ng-if="vm.orderInfo.groupedIssuedExtraServices.meal[passengerNum][flightNum].length">{{ \'web.extraServices.meal.issuedMealLabel\' | aliasStatic}}<div ng-repeat="issuedMealItem in vm.orderInfo.groupedIssuedExtraServices.meal[passengerNum][flightNum]" class="issuedMealItem">{{ issuedMealItem.title }} <span class="passengersTable__priceMeal" ng-bind-html="{ value: issuedMealItem.totalPrice, currency: issuedMealItem.currency } | price"></span></div></wrap></td></tr><tr ng-repeat-end="" class="contentServiceRow"><td ng-if="flightNum == vm.selectedFlight" class="firstCol"></td><td ng-if="flightNum == vm.selectedFlight" colspan="{{ vm.orderInfo.passengers.length }}"><div class="food_container" ng-if="vm.mealMenu"><div class="food"><div class="food__i"><div ng-if="vm.service.subgroups.length > 1" class="foodSorting"><ul><li ng-class="{ active: vm.mealMenuSubgroup === false }"><a href="" ng-click="vm.mealMenuSubgroup = false">{{ \'web.meal.subgroup.\' | aliasWithPrefix:\'all\' }}</a></li><li ng-repeat="(subgroupNum, subgroupCode) in vm.service.subgroups" ng-class="{ active: vm.mealMenuSubgroup === subgroupNum }"><a href="" ng-click="vm.mealMenuSubgroup = subgroupNum">{{ \'web.meal.subgroup.\' | aliasWithPrefix:subgroupCode }}</a></li></ul></div><div class="list customScroll_height customScroll_js" custom-scroll=""><div class="list__i isotopeGrid"><wrap ng-repeat="(subgroupNum, subgroup) in vm.mealMenu"><div ng-repeat="mealItem in subgroup" ng-if="vm.mealMenuSubgroup === subgroupNum || vm.mealMenuSubgroup === false" ng-class="{ active: mealItem.active, control_disabled: vm.locked }" class="item"><div class="food_wrap"><div class="img"><img ng-src="{{vm.mealImagesPath}}/{{ mealItem.serviceType }}-{{ mealItem.rfisc }}.jpg" alt=""></div><div class="food_info"><div class="name"><p>{{ mealItem.title }}</p><p class="price" ng-bind-html="{ value: mealItem.price, currency: mealItem.currency } | price"></p></div><div class="extra-service-picker"><service-picker count="mealItem.alreadySelectedCount" limit="mealItem.limit" locked="vm.locked" on-increase="vm.mealCountChangeHandler(subgroupNum, mealItem, +1)" on-decrease="vm.mealCountChangeHandler(subgroupNum, mealItem, -1)"></service-picker></div><div class="description"><a ng-if="vm.hasAlias(\'web.extraServices.meal.ingredientsDescriptionContent.\' + mealItem.serviceType + \'.\' + mealItem.rfisc)" href="" fancybox="popupAlias" class="link link--ingredientsDescription" data-popup-alias="web.extraServices.meal.ingredientsDescriptionContent.{{mealItem.serviceType}}.{{mealItem.rfisc}}">{{ \'web.extraServices.meal.ingredientsDescriptionLabel\' | aliasStatic }}</a><p ng-bind-html="mealItem.description"></p></div></div></div></div></wrap></div></div></div></div></div></td></tr></tbody></table><div class="passengersTable__cancel"><a href="" ng-click="vm.switchService()" ng-if="!vm.checkServiceRemovalProhibited(\'meal\')" class="passengersTable__link passengersTable__link_cancel">{{ \'web.extraServices.meal.cancel\' | aliasStatic }}</a></div></div></div></div></div></div><div class="item__i mobileShow"><div class="top"><div class="top__i"><a href=""><div class="row"><table><tbody><tr><td><i class="icon_meal"></i></td><td><div class="name">{{ \'web.extraServices.meal.header\' | aliasStatic}} <a href="" fancybox="popupAlias" data-popup-alias="web.extraServicesRules.meal"><i class="icon_info"></i></a></div></td></tr></tbody></table></div></a><div class="row"><a href=""><div ng-if="vm.service.active && vm.service.editablePrice" class="price"><div class="price__i"><h3 ng-bind-html="{ value: vm.service.editablePrice.price, currency: vm.service.editablePrice.currency } | price"></h3></div></div><div ng-if="!vm.service.active && vm.service.minPrice" class="price"><div class="price__i"><p>{{ \'web.extraServices.minPrice\' | aliasStatic}}</p><h3 ng-bind-html="{ value: vm.service.minPrice.price, currency: vm.service.minPrice.currency } | price"></h3></div></div></a> <a href="" ng-click="vm.switchService()" ng-if="!vm.checkServiceRemovalProhibited(\'meal\')" ng-class="{ active: vm.service.active }" class="btn showDrop_js"><span class="show">{{ \'web.extraServices.meal.select\' | aliasStatic}}</span> <span class="hide">{{ \'web.extraServices.meal.deselect\' | aliasStatic}}</span></a></div></div></div><div class="drop" ng-class="{ active: vm.service.active, show_js: vm.service.active }"><div class="drop__i"><div class="foodSelect drop_mobile"><div class="foodSelect__i"><div class="passengersContainer"><div class="passengersTableContainer" ng-class="{ one_passenger: (vm.getAvailablePassengersCount(vm.service.availableByPassengerSegments) == 1) }"><a href="" ng-click="vm.scrollToEnd();" class="passengersTableContainer__control passengersTableContainer__control_next" ng-class="{ control_disabled: !vm.canScrollRight }"></a><table class="passengersTable passengersTableMobile"><tbody><tr class="headRow"><td class="firstCol"><a href="" ng-click="vm.scrollToStart();" class="passengersTable__control passengersTable__control_prev" ng-class="{ control_disabled: !vm.canScrollLeft }"></a></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-if="vm.service.availableByPassengerSegments[passengerNum]">{{ passenger.lastName }} {{ passenger.firstName }}</td></tr><tr ng-repeat="(flightNum, flight) in vm.orderInfo.plainFlights" ng-if="vm.service.availableBySegments[flightNum]" class="contentRow"><td class="firstCol"><div class="date">{{ flight.date | formatDate: \'D MMMM, dd\'}}</div><div class="route"><div class="route__dep"><span class="route__dep__city">{{ flight.originport }}</span></div><div class="route__plane"><i class="icon_plane"></i></div><div class="route__arr"><span class="route__arr__city">{{ flight.destinationport }}</span></div></div></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-if="vm.service.availableByPassengerSegments[passengerNum]" ng-class="{ active: vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum }" ng-init="selectedPassengerFlightMeal = vm.getSelectedPassengerFlightMeal(passengerNum, flightNum)"><a href="" fancybox="popupMeal" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" class="passengersTable__link" ng-class="{ passengersTable__link_empty: !selectedPassengerFlightMeal, passengersTable__link_select: (!selectedPassengerFlightMeal && vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum) }"><wrap ng-if="!selectedPassengerFlightMeal && (vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum)">{{ \'web.extraServices.meal.selectItem\' | aliasStatic}}</wrap><wrap ng-if="!selectedPassengerFlightMeal && !(vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum)">{{ \'web.extraServices.meal.noneSelected\' | aliasStatic}}</wrap><wrap ng-if="selectedPassengerFlightMeal">{{ selectedPassengerFlightMeal.count }} - <span ng-bind-html="{ value: selectedPassengerFlightMeal.cost, currency: selectedPassengerFlightMeal.currency } | price"></span></wrap></a> <a ng-if="selectedPassengerFlightMeal && !vm.checkServiceRemovalProhibited(\'meal\', passengerNum, flightNum)" href="" ng-click="vm.removePassengerFlightMeal(passengerNum, flightNum)" class="btn-remove"><span class="infoBoxWrap"><i class="icon_remove"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.extraServices.meal.cancelByPassengerSegment\' | aliasStatic }}</span></span></span></a></td></tr></tbody></table></div></div><div class="passengersTable__cancel"><a href="" ng-click="vm.switchService()" ng-if="!vm.checkServiceRemovalProhibited(\'meal\')" class="passengersTable__link passengersTable__link_cancel">{{ \'web.extraServices.meal.cancel\' | aliasStatic}}</a></div></div></div></div></div><popup-meal menu="vm.mealMenu" passenger="vm.orderInfo.passengers[vm.selectedPassenger]" next-passenger="vm.orderInfo.passengers[vm.selectedPassenger + 1]" prev-passenger="vm.orderInfo.passengers[vm.selectedPassenger - 1]" switch-next="vm.selectFlightPassenger(vm.selectedFlight, vm.selectedPassenger + 1)" switch-prev="vm.selectFlightPassenger(vm.selectedFlight, vm.selectedPassenger - 1)" flight="vm.orderInfo.plainFlights[vm.selectedFlight]" handler="vm.mealCountChangeHandler" path="vm.mealImagesPath" subgroups="vm.service.subgroups"></popup-meal></div>')}])}();