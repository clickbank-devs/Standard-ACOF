window.define("orderform/Orders",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/util/data_util"),o=require("orderform/cartSummaryDisplay");t.exports={form:null,sessionId:null,changeListeners:{},clickListeners:{},dataListeners:[],onListeners:[],data:null,recalculating:!1,isPhysical:!1,language:null,activeProductCount:null,disableSubmit:function(){this.form.submit(this.preventSubmit)},enableSubmit:function(){this.form.unbind("submit",this.preventSubmit)},preventSubmit:function(e){e.preventDefault()},addFormListener:function(e,t){return this.changeListeners[e]||(this.changeListeners[e]=[]),this.changeListeners[e].push(t),t},addDataChangeListener:function(e){return this.dataListeners.push(e),e},addOnListener:function(e,t,n){return this.onListeners.push({event:e,selector:t,listener:n}),n},addClickListener:function(e,t){return this.clickListeners[e]||(this.clickListeners[e]=[]),this.clickListeners[e].push(t),t},setData:function(e){this.data=e,n.each(this.dataListeners,function(t,n){n.dataChanged(e)})},setRecalculating:function(e){this.recalculating=e,e?this.form.addClass("recalculating"):this.form.removeClass("recalculating")},getCountryCode:function(){return this.data["order\\.shipTo\\.country"]},init:function(e,t,o,i,a){var s=n("#"+e),l=this;this.form=s,this.sessionId=t,this.isPhysical=o,this.language=i,this.activeProductCount=a,n.each(this.changeListeners,function(e,t){n.each(t,function(t,r){s.find("."+e).change(n.proxy(r.onChange,r))})}),n.each(this.clickListeners,function(e,t){n.each(t,function(t,r){s.find("."+e).click(n.proxy(r.onclick,r))})}),n.each(this.onListeners,function(e,t){var r="on"+t.event.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()});s.on(t.event,t.selector,n.proxy(t.listener[r],t.listener))}),s.submit(function(){r.sanitizeDataAsRequired(l.data),l.disableSubmit()}),s.find("input[name='order.javascriptDisabled']").val("false")},determineView:function(){!this.data.skipSummary&&this.data.firstRequest&&this.data.cartOrder?o.displaySummary():o.displayOrderform(),this.data.editItems&&(n("#orderLineItems tr.read_only_order_item_row").remove(),n("#orderLineItems tr.editable_order_item_row").show())},validateTermsAndConditions:function(){var e=n("#acceptedTerms");return!e.length||e.is(":checked")?!0:(n("label[for='acceptedTerms']").css("color","red"),!1)},initQuantityValidator:function(){var e=n(".quantityWidth"),t={};n.each(e,function(e,r){t[r.id]=n(r).val()}),e.on("keyup keydown change paste",function(e){var r=e.target,o=n(r);setTimeout(function(){var e=o.val(),n=o.parents(".quantity"),i=n.find(".quantityIncrement"),a=n.find(".quantityDecrement"),s=!!(e+"").match(/^([1-9][0-9]?)?$/)&&(!r.willValidate||r.checkValidity());s?t[r.id]=e:o.val(t[r.id]),o.val()===o[0].max?(i.addClass("disableClick"),a.removeClass("disableClick")):1===1*o.val()||""===o.val().trim()?(a.addClass("disableClick"),i.removeClass("disableClick")):(i.removeClass("disableClick"),a.removeClass("disableClick"))})}),e.trigger("change")},initRemovedItems:function(){var e,t,r=this.data.items;for(t=0;t<r.length;t++)e=r[t],e.remove&&this.removeItem(n("#order_item_"+t+"_remove"))},undoRemoveItem:function(e){var t=e.parent().children("input[type=hidden]"),r=e.parent().children(".itemRemove"),o=e.parents(".subtotalRow"),i=o.prev(),a=i.children(".itemTitle"),s=o.find(".itemSubtotal"),l=i.find(".quantityWidth"),u=i.find(".quantityDecrement"),c=i.find(".quantityIncrement"),d=t.hasClass("recurring_item");t.val(!1).change(),i.removeClass("disableRow"),o.removeClass("disableRow"),l.removeClass("disableQty"),l.prop("disabled",!1),u.prop("disabled",!1),c.prop("disabled",!1),l.val()===l[0].max?(c.addClass("disableClick"),u.removeClass("disableClick")):1===1*l.val()||""===l.val().trim()?(u.addClass("disableClick"),c.removeClass("disableClick")):(c.removeClass("disableClick"),u.removeClass("disableClick")),a.removeClass("disableText"),s.removeClass("disableText"),r.show(),e.hide(),d&&n(".js-recurringItem").show(),this.activeProductCount=this.activeProductCount+1,this.activeProductCount>1&&n("#orderLineItems tr:not(.disableRow) a.itemRemove").removeClass("disableClick")},removeItem:function(e){if(n("#orderLineItems tr:not(.disableRow) a.itemRemove").hasClass("disableClick"))return!1;var t=e.parent().children("input[type=hidden]"),r=e.parent().children(".itemUndoRemove"),o=e.parents(".subtotalRow"),i=o.prev(),a=i.children(".itemTitle"),s=o.find(".itemSubtotal"),l=i.find(".quantityWidth"),u=i.find(".quantityDecrement"),c=i.find(".quantityIncrement"),d=t.hasClass("recurring_item");t.val(!0).change(),i.addClass("disableRow"),o.addClass("disableRow"),l.addClass("disableQty"),l.prop("disabled",!0),u.prop("disabled",!0),u.addClass("disableClick"),c.prop("disabled",!0),c.addClass("disableClick"),a.addClass("disableText"),s.addClass("disableText"),r.show(),e.hide(),d&&n(".js-recurringItem").hide(),this.activeProductCount=this.activeProductCount-1,this.activeProductCount<=1&&n("#orderLineItems tr:not(.disableRow) a.itemRemove").addClass("disableClick")},buffer:function(e,t){var n=0;return function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)}},recalcDone:function(e){this.setData(e),this.setRecalculating(!1)},recalcFailed:function(){n("#ajaxTimeoutError").show()}}}),window.define("orderform/Strings",function(require,e,t){"use strict";t.exports={formatString:function(e){var t,n=window.strings[e];for(t=1;t<arguments.length;t++)n=n.replace(new RegExp("\\{"+(t-1)+"\\}","gm"),arguments[t]);return n}}}),window.define("orderform/array_addons",function(){"use strict";Array.prototype.find=function(e){var t;for(t=0;t<this.length;t++)if(e(this[t]))return this[t];return null},Array.prototype.contains=function(e){var t;for(t=0;t<this.length;t++)if(e===this[t])return!0;return!1}}),window.define("orderform/attachRecalc",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/listeners/RecalcListener");t.exports=function(e){e.change(n.proxy(r.onChange,r))}}),window.define("orderform/cartSummaryDisplay",function(require,e,t){"use strict";/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ ©2014 ClickBank All Rights Reserved
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var n=require("jquery");t.exports={displayOrderform:function(){n("#summaryBody").hide(),n("#orderformBody").show()},displaySummary:function(){n("#orderformBody").hide(),n("#summaryBody").show()}}}),window.define("orderform/couponDisplay",function(require,e,t){"use strict";var n=require("jquery");t.exports={handleDisplay:function(e){n("#couponRow").addClass("hideRow"),n("#couponField").removeClass("error"),n("#couponErrMsg").removeClass("show"),e.couponFromPaylink&&n("#couponField").css("display","none"),e.couponApplied?(n("#couponField").removeClass("error"),n("#couponRow").removeClass("hideRow"),n("#couponErrMsg").removeClass("show"),n("#readonlyCode").text(n("#couponCode").val()),n("#itemCoupon").val("")):e.hasCouponError&&(n("#couponField").addClass("error"),n("#couponErrMsg").addClass("show"),n("#readonlyCode").text(""),n("#couponCode").val(""),e.couponFromPaylink&&(n("#fromPaylink").val(!1),n("#couponField").css("display","block")))}}}),window.define("orderform/cvvhelp",function(require,e,t){"use strict";var n=require("orderform/Orders");t.exports=function(e){var t=window.open("cvv-popup.html?locale="+n.language,"cvv","resizable,width=325,height=300");t.focus(),e.preventDefault()}}),window.define("orderform/listeners/BillingSameAsShippingListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addFormListener("changes_billing_same_as_shipping",{onChange:function(e){var t=n(e.target);"true"===t.val()?n(".billing_different_fields").hide():n(".billing_different_fields").show()}})}),window.define("orderform/listeners/CardIconsListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addDataChangeListener({dataChanged:function(e){var t=n("#ccimages");t.empty(),n.each(e.avail_brands,function(e,r){var o=r.toLowerCase(),i=n("<label for='payByCard' class='inlineblock paymenttype_container_img sprite sprite-"+o+"' />");t.append(i)})}})}),window.define("orderform/listeners/CouponListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/couponDisplay");t.exports=r.addClickListener("coupon_trigger",{onclick:function(){return n("#itemCoupon").val()?(n("#couponCode").val(n("#itemCoupon").val()),n.ajax({type:"POST",url:"recalculate2.html;jsessionid="+r.sessionId,data:r.form.serialize(),dataType:"json"}).done(n.proxy(this.recalcDone,this)).fail(n.proxy(this.recalcFailed,this)),void 0):!1},recalcDone:function(e){r.setData(e),r.setRecalculating(!1),o.handleDisplay(e)},recalcFailed:function(){n("#ajaxTimeoutError").show()}})}),window.define("orderform/listeners/OrderBumpListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addOnListener("click","input:checkbox.order_bump_product",{onClick:function(e){var t,o;e.stopImmediatePropagation(),t=n("input.order_bump_product:checked").map(function(){return this.value}).get(),r.disableSubmit(),o=n.obXHR,n.obXHR=n.ajax({type:"POST",url:"orderBump.html;jsessionid="+r.sessionId+"/?bsks="+t,data:r.form.serialize(),dataType:"json",timeout:2500}).done(n.proxy(this.bumpAdded,this)).fail(n.proxy(this.bumpDeleted,this)),o&&o.abort()},bumpAdded:function(e,t,o){var i,a,s,l,u,c,d,p,h,f;if(!o||o===n.obXHR){if(e){if(r.setData(e),r.setRecalculating(!1),n("#initv").val(e.initv),e.reload)return r.form.append(n("<input type='hidden' name='refresh' value='true' />")),r.enableSubmit(),r.form.submit(),r.disableSubmit(),void 0;for(i=e.bumpItems,s=i.length,p=n("#cb_bump_container"),p.toggle(s>0),c=n("[class*='cb_obp_']"),d=c.length,f=n(".cb_bump_box").map(function(){return this.getAttribute("class")}).get(),l=0;s>l;l++)a=i[l],h=this.createOrderBumpDivContent(a,!0),u=n.inArray(h.attr("class"),f),u>-1&&f.splice(u,1),d>l?this.updateOrderBumpContent(n(c[l]),h):(f.push(h.attr("class")),p.append(h));for(;d>l;)n(c[l]).remove(),l++;n(".cb_bump_messages").toggle(f.length>0)}r.enableSubmit()}},bumpDeleted:function(e,t,o){e&&e!==n.obXHR||"abort"===o||(r.enableSubmit(),r.data&&n.each(r.data.bumpItems,function(e,t){n("#cb_"+t["obp.id"]).prop("checked",t.selected)}))},createOrderBumpDivContent:function(e,t){var r=t?"<div class='cb_bump_box cb_obp_"+e["obp.id"]+"'>":"";return r+="<div class='cb_bump_check'>",r+="<input type='checkbox' id='cb2_"+e["obp.id"],r+="' class='order_bump_product' value='"+e["obp.itemNo"]+"' ",e.selected===!0&&(r+=" checked "),r+="></div>",r+="<div class='cb_bump_text'>"+e["ob.text"]+"</div>",e["ob.recurring"]&&(r+="<div class='cb_bump_recurring_terms'>",r+="<h3 class='js-recurringItem'>"+e["obrt.future"]+"</h3>",r+="<div class='js-recurringItem rebill_details customer_amount'>",r+=e["obrt.description"],r+="</div>",r+="<div class='js-recurringItem rebill_future_notes'>",r+="<div>"+e["obrt.billedOn"]+"</div>",r+="<div>"+e["obrt.terms"]+"</div>",r+="<div>"+e["obrt.acceptance"]+"</div>",r+="</div>",r+="</div>"),t&&(r+="</div>"),n(r)},updateOrderBumpContent:function(e,t){var r,o,i,a;e.attr("class")!==t.attr("class")?e.replaceWith(t):(r=n(".cb_bump_text",e),i=n(".cb_bump_text",t),o=n(".cb_bump_recurring_terms",e),a=n(".cb_bump_recurring_terms",t),r.html()!==i.html()&&r.replaceWith(i),o.replaceWith(a))}}),t.exports=r.addOnListener("click","div.cb_bump_box",{onClick:function(e){var t,r;t=e.target,r=e.currentTarget,e.stopPropagation(),"checkbox"!==t.type&&r&&n(r).find("input:checkbox").click()}})}),window.define("orderform/listeners/PaymentTypeListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addFormListener("changes_payment_type",{onChange:function(){var e=r.form.find("input[name=payment_option]:checked"),t=n("<input type='hidden' name='"+e.attr("id")+"' value='true' />");r.form.append(t),r.form.submit(),r.disableSubmit()}})}),window.define("orderform/listeners/QuantityListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addClickListener("quantityIncrement",{onclick:function(e){var t=n(e.target).parent().children("input[type=number]"),r=1*t.val();r<1*t[0].max&&t.val(r+1).change()}}),t.exports=r.addClickListener("quantityDecrement",{onclick:function(e){var t=n(e.target).parent().children("input[type=number]"),r=1*t.val();r>1&&t.val(r-1).change()}}),t.exports=r.addFormListener("quantity_update_trigger",{onChange:r.buffer(function(e){var t=n(e.target);t.val()||t.val(1),n.ajax({type:"POST",url:"recalculate2.html;jsessionid="+r.sessionId,data:r.form.serialize(),dataType:"json"}).done(function(e){r.recalcDone(e)}).fail(function(){r.recalcFailed()})},500)})}),window.define("orderform/listeners/RecalcListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addFormListener("trigger",{onChange:function(){var e,t,o,i;e=r.form.find("input[name=previousCountry]"),e&&e.length>0?(t=e.val(),o=r.form.find(n("select[id=shippingCountry]")).children(":selected").attr("id"),i=t?0!==t.localeCompare(o):"US"!==o):i=!1,r.setRecalculating(!0),n.ajax({type:"POST",url:"recalculate2.html;jsessionid="+r.sessionId+"/?countryChanged="+i,data:r.form.serialize(),dataType:"json"}).done(n.proxy(this.recalcDone,this)).fail(n.proxy(this.recalcFailed,this))},recalcDone:function(e){var t=r.form.find("input[name=previousCountry]");r.setData(e),t&&t.length>0&&t.val(e["order\\.shipTo\\.country"]),r.setRecalculating(!1)},recalcFailed:function(){n("#ajaxTimeoutError").show()}})}),window.define("orderform/listeners/RemoveItemListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addClickListener("itemRemove",{onclick:function(e){r.removeItem(n(e.target))}}),t.exports=r.addClickListener("itemUndoRemove",{onclick:function(e){r.undoRemoveItem(n(e.target))}}),t.exports=r.addFormListener("item_remove_trigger",{onChange:r.buffer(function(){n.ajax({type:"POST",url:"recalculate2.html;jsessionid="+r.sessionId,data:r.form.serialize(),dataType:"json"}).done(function(e){r.recalcDone(e)}).fail(r.recalcFailed)},500)})}),window.define("orderform/listeners/ShowCityListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/Strings"),i=require("orderform/listeners/ShowLocationListener");t.exports=r.addDataChangeListener(n.extend({},i,{isRequiredPath:"cityRequired",optionsPath:"cities",inputContainerSelector:"#cityInputContainer",inputRowSelector:"#cityInputRow",inputName:"order.shipTo.city",inputId:"cityDropDown",emptyOptionLabel:o.formatString("please_select_city"),valuePath:"order\\.shipTo\\.city"}))}),window.define("orderform/listeners/ShowCountyListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/Strings"),i=require("orderform/listeners/ShowLocationListener");t.exports=r.addDataChangeListener(n.extend({},i,{isRequiredPath:"countyRequired",optionsPath:"counties",inputContainerSelector:"#countyInputContainer",inputRowSelector:"#countyInputRow",inputName:"order.shipTo.county",inputId:"countyDropDown",emptyOptionLabel:o.formatString("please_select_county"),valuePath:"order\\.shipTo\\.county",shouldShow:function(e){return e[this.isRequiredPath]&&e.counties.length>0}}))}),window.define("orderform/listeners/ShowElvListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addDataChangeListener({dataChanged:function(e){var t=e["order\\.shipTo\\.country"];"EUDD"===e.paymentMethod||"EUR"===e.currency&&("DE"===t||"AT"===t)?n(".eudd_display").show():n(".eudd_display").hide()}})}),window.define("orderform/listeners/ShowLocationListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/attachRecalc");t.exports={isRequiredPath:null,optionsPath:null,inputContainerSelector:null,inputRowSelector:null,inputName:null,inputId:null,emptyOptionLabel:null,valuePath:null,_lastInput:null,shouldShow:function(e){return r.isPhysical&&this._shouldShowForPhysical(e["order\\.shipTo\\.country"],e.cities)||e[this.isRequiredPath]&&e[this.optionsPath].length>1},_shouldShowForPhysical:function(e,t){return e&&("US"!==e||t.length>0)},dataChanged:function(e){this.shouldShow(e)?this.showInput(e):this.hideInput()},showInput:function(e){var t=this.buildInput(e),r=n(this.inputContainerSelector);r.empty(),r.append(t),n(this.inputRowSelector).show()},buildInput:function(e){return 1===e[this.optionsPath].length?this.buildSingleValue(e[this.optionsPath][0]):e[this.optionsPath].length>1?this.buildDropdown(e[this.optionsPath],e):this.buildOpenValue(e)},buildDropdown:function(e,t){var r=n("<select id='"+this.inputId+"' name='"+this.inputName+"'></select>");return r.append(n("<option />").text(this.emptyOptionLabel).val("")),n.each(e,n.proxy(function(e,o){var i=n(n("<option />").val(o).text(o)),a=this._lastInput?this._lastInput.val().toUpperCase():this.firstTimeValue(t);a&&a===o&&i.attr("selected","selected"),r.append(i)},this)),o(r),this._lastInput=r,r},firstTimeValue:function(e){return e[this.valuePath]},buildSingleValue:function(e){var t=n("<span class='readonlyvalue'></span>"),r=n("<input type='hidden' id='"+this.inputId+"'name='"+this.inputName+"' />").val(e);return t.text(e),t.append(r),this._lastInput=r,t},buildOpenValue:function(e){var t=n("<input type='text' id='"+this.inputId+"' name='"+this.inputName+"' maxlength='128' />");return t.val(e[this.valuePath]),this._lastInput?t.val(this._lastInput.val()):e[this.valuePath]&&t.val(e[this.valuePath]),this._lastInput=t,t},hideInput:function(){n(this.inputRowSelector).hide()}}}),window.define("orderform/listeners/ShowStateListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/Strings"),i=require("orderform/listeners/ShowLocationListener");t.exports=r.addDataChangeListener(n.extend({},i,{isRequiredPath:"stateRequired",optionsPath:"states",inputContainerSelector:"#stateInputContainer",inputRowSelector:"#stateInputRow",inputName:"order.shipTo.state",inputId:"stateDropDown",emptyOptionLabel:o.formatString("please_select_state"),valuePath:"order\\.shipTo\\.state",shouldShow:function(e){var t=r.getCountryCode();return"DE"!==t&&"AT"!==t&&i.shouldShow.call(this,e)}}))}),window.define("orderform/listeners/SoloSwitMaesListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addDataChangeListener({dataChanged:function(e){var t=e.card_brand;"MAES"===t||"SWIT"===t?n(".solo_content").show():n(".solo_content").hide()}})}),window.define("orderform/listeners/SubmitRefreshListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders");t.exports=r.addFormListener("trigger_with_submit",{onChange:function(){var e=n("<input type='hidden' name='refresh' value='true' />");r.form.append(e),r.form.submit(),r.disableSubmit()}})}),window.define("orderform/listeners/SummaryBackListener",function(require,e,t){"use strict";/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ ©2014 ClickBank All Rights Reserved
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var n=require("orderform/Orders"),r=require("orderform/cartSummaryDisplay");t.exports=n.addClickListener("summaryBack",{onclick:function(){r.displaySummary()}})}),window.define("orderform/listeners/SummaryReviewListener",function(require,e,t){"use strict";/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ ©2014 ClickBank All Rights Reserved
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var n=require("orderform/Orders"),r=require("orderform/cartSummaryDisplay");t.exports=n.addClickListener("summaryReview",{onclick:function(){r.displaySummary()}})}),window.define("orderform/listeners/SummarySubmitListener",function(require,e,t){"use strict";/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ ©2014 ClickBank All Rights Reserved
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var n=require("orderform/Orders"),r=require("orderform/cartSummaryDisplay");t.exports=n.addClickListener("cartPayment",{onclick:function(){n.validateTermsAndConditions()&&r.displayOrderform()}})}),window.define("orderform/listeners/TotalsListener",function(require,e,t){"use strict";var n=require("jquery"),r=require("orderform/Orders"),o=require("orderform/Strings"),i=require("orderform/couponDisplay");t.exports=r.addDataChangeListener({dataChanged:function(e){var t=e.items[0];e.baseOrderSize>1?e.isFreeCart||n(".cart_customer_subtotal").text(e.preDiscountAmount):t.product_is_free||t.freeStandardShippable||n(".customer_subtotal").text(t.orig_productPrice+t.preDiscountAmount),n(".customer_total").text(e.total),n(".customer_tax").text(e.tax),n(".customer_rebill_total").text(t.rebillTotal),n(".tax_type").text(o.formatString("tax_type_"+e.tax_type)),n(".coupon_discount").text(e.negatedCouponDiscount),r.isPhysical&&(e["order\\.shipTo\\.countryId"]?(n(".cart_customer_shipping_total").text(e.shipping),n(".customer_shipping_total").text(t.preDiscountShipping),n(".customer_shipping_total_discounted").text(t.shipping),n("#total_notes").text("")):(n(".customer_shipping_total").text("*"),n("#total_notes").text(o.formatString("shipping_requires_country")))),n.each(e.items,this.updateItemTotals.bind(this)),n.each(e.bumpItems,this.updateBumpItemTotals.bind(this)),i.handleDisplay(e)},updateItemTotals:function(e,t){var r,o,i;r=t.orderItemType,o=t.productid,"BUMP"!==r?(i="#product_"+o,n(i+"_subtotal").text(t.subtotal),n(i+"_pre_discount").text(t.preDiscountAmount),n(i+"_shipping").text(t.shipping),n(i+"_quantity").text(t.quantity),t.rebillTotal&&n(".customer_rebill_total").text(t.rebillTotal),n(i+"_price").text(t.orig_productPrice+t.productPrice),n(i+"_price_no_conversion").text(t.productPrice)):"BUMP"===r&&this.updateBumpItemTotals(e,t)},updateBumpItemTotals:function(e,t){var r,o;r=t["obp.id"]||t.productid,o="#ob_product_"+r,t["ob.recurring"]===!0?(n(o+"_price").text(t["ob.cInitialPrice"]),n(o+"_rebill").text(t["ob.cSubsequentPrice"]),n(o+"_rebillTotal").text(t["ob.cSubsequentPrice"])):n(o+"_price").text(t["ob.cPrice"])}})}),window.define("orderform/util/data_util",function(require,e,t){"use strict";var n=require("jquery");t.exports={sanitizeDataAsRequired:function(e){e.stateRequired||(this._nukeContent(n("#stateOpenField")),this._nukeContent(n("#stateDropDown"))),e.cityRequired||(this._nukeContent(n("#cityOpenField")),this._nukeContent(n("#cityDropDown"))),e.cityRequired||this._nukeContent(n("#countyInputRow"))},_nukeContent:function(e){e.length&&e.is(":hidden")&&e.val("")}}});