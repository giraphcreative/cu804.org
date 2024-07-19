
KJE.parameters.set("NEW_RATE_CALCULATED_HIDE",true);KJE.parameters.set("NEW_TERM_CALCULATED_HIDE",true);KJE.ShouldIRefiAutoCalc=function(){this.MSG_INCREASE1=KJE.parameters.get("MSG_INCREASE1","increase INTEREST_AMT_SAVINGS");this.MSG_DECREASE1=KJE.parameters.get("MSG_DECREASE1","decrease INTEREST_AMT_SAVINGS");this.MSG_INCREASE2=KJE.parameters.get("MSG_INCREASE2","save INTEREST_AMT_SAVINGS in interest");this.MSG_DECREASE2=KJE.parameters.get("MSG_DECREASE2","pay INTEREST_AMT_SAVINGS more in interest");this.MSG_INCREASE3=KJE.parameters.get("MSG_INCREASE3","increase MONTHLY_AMT_SAVINGS");this.MSG_DECREASE3=KJE.parameters.get("MSG_DECREASE3","decrease MONTHLY_AMT_SAVINGS");this.MSG_TITLE="";this.MSG_TITLE_INCREASE=KJE.parameters.get("MSG_TITLE_INCREASE","You could save INTEREST_AMT_SAVINGS in interest");this.MSG_TITLE_DECREASE=KJE.parameters.get("MSG_TITLE_DECREASE","You could pay INTEREST_AMT_SAVINGS more in interest.");this.MSG_BREAK_EVEN1=KJE.parameters.get("MSG_BREAK_EVEN1","With a monthly payment increase, there is no payment break even point.");this.MSG_BREAK_EVEN2=KJE.parameters.get("MSG_BREAK_EVEN2","Refinancing will break even in YOU_WILL_BREAK_EVEN_IN months.");this.MSG_BREAK_EVEN_IMMEDIATE=KJE.parameters.get("MSG_BREAK_EVEN_IMMEDIATE","Refinancing will save you money with the first payment.");this.DS_PAYMENTS=KJE.FloatArray(2);this.DS_INTEREST=KJE.FloatArray(2);this.cats=["Current Loan","New Loan"];this.cats[0]=KJE.parameters.get("MSG_CAT1",this.cats[0]);this.cats[1]=KJE.parameters.get("MSG_CAT2",this.cats[1]);this.catlabel=["Current Payment","New Payment"];this.catlabel[0]=KJE.parameters.get("MSG_CATLABEL1",this.catlabel[0]);this.catlabel[1]=KJE.parameters.get("MSG_CATLABEL2",this.catlabel[1]);this.sSchedule=new KJE.Repeating();this.sSchedule2=new KJE.Repeating()};KJE.ShouldIRefiAutoCalc.prototype.clear=function(){this.ORIGINAL_LOAN_AMOUNT=0;this.ORIGINAL_RATE=0;this.ORIGINAL_TERM=0;this.NUMBER_OF_PAYMENTS_MADE=0;this.NEW_RATE=0;this.NEW_TERM=0;this.CLOSING_COSTS=0};KJE.ShouldIRefiAutoCalc.prototype.calculate=function(H){var k=KJE;var d=this.ORIGINAL_LOAN_AMOUNT;var v=this.ORIGINAL_RATE;var e=this.ORIGINAL_TERM;var h=this.NUMBER_OF_PAYMENTS_MADE;var I=this.NEW_RATE;var w=this.NEW_TERM;var m=this.CLOSING_COSTS;if(KJE.ShouldIRefiAutoCalc.getTerm){w=KJE.ShouldIRefiAutoCalc.getTerm(this)}if(KJE.ShouldIRefiAutoCalc.getRate){I=KJE.ShouldIRefiAutoCalc.getRate(this)}var r=0;var u="";this.oldLOAN_AMOUNT=d;var b=KJE.PMT(v/1200,e,d);var A=d;var t=0;var s=0;var a=d;var p=0;var E=0;var F=0;var g=0;var G=0;var q=0;var f=1;var z=1;if(H){var l=this.sSchedule;l.clearRepeat();l.addHeader({sCell:KJE._sHeadingUnderline,sContent:l.sReportCol("Original Loan Schedule",7),sFormat:"COLSPAN=6 scope='colgroup'"});l.addHeader(l.sReportCol("Year",1),l.sReportCol("Payments",2),l.sReportCol("Interest",3),l.sReportCol("Principal",4),l.sReportCol("Balance",5),l.sReportCol("Interest Paid",6));var C=this.sSchedule2;C.clearRepeat();C.addHeader({sCell:KJE._sHeadingUnderline,sContent:C.sReportCol("New Loan Schedule",8),sFormat:"COLSPAN=6 scope='colgroup'"});C.addHeader(C.sReportCol("Year",1),C.sReportCol("Payments",2),C.sReportCol("Interest",3),C.sReportCol("Principal",4),C.sReportCol("Balance",5),C.sReportCol("Interest Paid",6))}for(var y=1;y<=e;y++){t=a*(v/1200);s=b-t;a-=s;p+=t;E+=s;F+=t;g+=s;G+=t;q+=b;if(y>h){r+=t}if(y==h){A=a}if((y%12)==0){if(H&&(f==1)){l.addRepeat(k.number(z),k.dollars(q,2),k.dollars(F,2),k.dollars(E,2),k.dollars(a,2),k.dollars(p,2))}E=0;F=0;q=0;z++}}var D=A;var c=KJE.PMT(I/1200,w,D);t=0;s=0;a=A;p=0;E=0;F=0;g=0;G=0;z=1;for(var y=1;y<=w;y++){t=a*(I/1200);s=c-t;a-=s;p+=t;E+=s;F+=t;g+=s;G+=t;if((y%12)==0){if(H&&(f==1)){C.addRepeat((z),k.dollars(c*12,2),k.dollars(F,2),k.dollars(E,2),k.dollars(a,2),k.dollars(p,2))}E=0;F=0;z++}}var j=G;var x=r-j;var o=b-c;var B=m/(b-c);if(x>=0){u=this.MSG_INCREASE2;this.MSG_TITLE=this.MSG_TITLE_INCREASE}else{u=this.MSG_DECREASE2;this.MSG_TITLE=this.MSG_TITLE_DECREASE}u=KJE.replace("INTEREST_AMT_SAVINGS",k.dollars(x<0?x*(-1):x,2),u);this.MSG_TITLE=KJE.replace("INTEREST_AMT_SAVINGS",k.dollars(x<0?x*(-1):x,2),this.MSG_TITLE);this.DS_PAYMENTS[0]=b;this.DS_PAYMENTS[1]=c;this.DS_INTEREST[0]=r;this.DS_INTEREST[1]=j;this.ORIGINAL_LOAN_AMOUNT=d;this.CURRENT_PAYMENT=b;this.CURRENT_BALANCE=A;this.NEW_BALANCE=D;this.CURRENT_PAYMENT=b;this.NEW_PAYMENT=c;this.REMAINING_INTEREST_ON_CURRENT_MORTGAGE=r;this.INTEREST_ON_NEW_MORTGAGE=j;this.INTEREST_SAVINGS=x;this.MONTHLY_SAVINGS=o;this.YOU_WILL_BREAK_EVEN_IN=B;this.INTEREST_SAVINGS_MSG=u;this.NEW_TERM=w;this.NEW_RATE=I;this.MSG_MONTHLY_SAVINGS="";if(this.MONTHLY_SAVINGS<0){this.MSG_MONTHLY_SAVINGS=this.MSG_INCREASE3;this.BREAK_EVEN_IN_MSG=this.MSG_BREAK_EVEN1}else{this.MSG_MONTHLY_SAVINGS=this.MSG_DECREASE3;if(this.YOU_WILL_BREAK_EVEN_IN<=0){this.BREAK_EVEN_IN_MSG=this.MSG_BREAK_EVEN_IMMEDIATE}else{this.BREAK_EVEN_IN_MSG=this.MSG_BREAK_EVEN2}}this.MSG_MONTHLY_SAVINGS=KJE.replace("MONTHLY_AMT_SAVINGS",k.dollars(this.MONTHLY_SAVINGS<0?this.MONTHLY_SAVINGS*(-1):this.MONTHLY_SAVINGS,2),this.MSG_MONTHLY_SAVINGS)};KJE.ShouldIRefiAutoCalc.prototype.formatReport=function(a){a.replace("MSG_TITLE",this.MSG_TITLE);a.dollars("ORIGINAL_LOAN_AMOUNT",this.ORIGINAL_LOAN_AMOUNT);a.percent("ORIGINAL_RATE",this.ORIGINAL_RATE/100,3);a.number("ORIGINAL_TERM",this.ORIGINAL_TERM);a.number("NUMBER_OF_PAYMENTS_MADE",this.NUMBER_OF_PAYMENTS_MADE);a.dollars("CURRENT_PAYMENT",this.CURRENT_PAYMENT);a.dollars("CURRENT_BALANCE",this.CURRENT_BALANCE);a.percent("NEW_RATE",this.NEW_RATE/100,3);a.number("NEW_TERM",this.NEW_TERM);a.dollars("CLOSING_COSTS",this.CLOSING_COSTS);a.dollars("NEW_PAYMENT",this.NEW_PAYMENT);a.dollars("REMAINING_INTEREST_ON_CURRENT_MORTGAGE",this.REMAINING_INTEREST_ON_CURRENT_MORTGAGE);a.dollars("INTEREST_ON_NEW_MORTGAGE",this.INTEREST_ON_NEW_MORTGAGE);a.replace("INTEREST_SAVINGS_MSG",this.INTEREST_SAVINGS_MSG);if(this.INTEREST_SAVINGS<0){a.replace("INTEREST_SAVINGS",this.MSG_INCREASE1)}else{a.replace("INTEREST_SAVINGS",this.MSG_DECREASE1)}a.dollars("INTEREST_AMT_SAVINGS",this.INTEREST_SAVINGS<0?this.INTEREST_SAVINGS*(-1):this.INTEREST_SAVINGS);a.replace("MONTHLY_SAVINGS",this.MSG_MONTHLY_SAVINGS);a.dollars("MONTHLY_AMT_SAVINGS",this.MONTHLY_SAVINGS<0?this.MONTHLY_SAVINGS*(-1):this.MONTHLY_SAVINGS);a.replace("BREAK_EVEN_IN_MSG",this.BREAK_EVEN_IN_MSG);a.number("YOU_WILL_BREAK_EVEN_IN",this.YOU_WILL_BREAK_EVEN_IN);a.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());a.replace("**REPEATING GROUP2**",this.sSchedule2.getRepeat())};KJE.CalcName="Auto Refinance Interest Savings Calculator";KJE.CalcType="ShouldIRefiAuto";KJE.CalculatorTitleTemplate="Auto Refinance Interest Savings";KJE.initialize=function(){KJE.CalcControl=new KJE.ShouldIRefiAutoCalc();KJE.GuiControl=new KJE.ShouldIRefiAuto(KJE.CalcControl)};KJE.ShouldIRefiAuto=function(k){var e=KJE;var b=KJE.gLegend;var g=KJE.inputs.items;var n=KJE.parameters.get("ORIGINAL_TERM_IN_YEARS",0);if(n>0){KJE.parameters.set("ORIGINAL_TERM",n*12);KJE.parameters.set("NEW_TERM",KJE.parameters.get("NEW_TERM")*12)}KJE.Slider("ORIGINAL_TERM","Term in months",12,KJE.parameters.get("TERM_MAX",480),0,e.FMT_NUMBER,6,KJE.parameters.get("TERM_SCALE_LABEL",KJE.s_label[8]),KJE.parameters.get("TERM_SCALE",KJE.useScale(8)));KJE.Slider("NEW_TERM","Term in months",1,KJE.parameters.get("TERM_MAX",480),0,e.FMT_NUMBER,6,KJE.parameters.get("TERM_SCALE_LABEL",KJE.s_label[8]),KJE.parameters.get("TERM_SCALE",KJE.useScale(8)));KJE.DollarSlider("ORIGINAL_LOAN_AMOUNT","Original loan",0,1000000,k.iDecimal,0,KJE.parameters.get("ORIGINAL_LOAN_AMOUNT_SLM",2));KJE.MortgageRateSlider("ORIGINAL_RATE","Rate");KJE.NumberSlider("NUMBER_OF_PAYMENTS_MADE","Number of payments made",0,KJE.parameters.get("TERM_MAX",121)-1,0);KJE.MortgageRateSlider("NEW_RATE","Rate");KJE.DollarSlider("CLOSING_COSTS","Closing costs",0,100000);KJE.Label("CURRENT_BALANCE","New loan balance");KJE.InputItem.AltHelpName="NEW_RATE";KJE.Label("NEW_RATE_CALCULATED","Rate");KJE.InputItem.AltHelpName="NEW_TERM";KJE.Label("NEW_TERM_CALCULATED","Term");var i=KJE.gNewGraph(KJE.gCATEGORIES,"GRAPH2",true,false,KJE.colorList[1],k.MSG_TITLE_DECREASE);i._legend._iOrientation=(b.TOP_RIGHT);i._showItemLabel=true;i._axisX.setVisible(false);var h=KJE.gNewGraph(KJE.gCATEGORIES,"GRAPH1",true,true,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE","Your payment will KJE1 per month"));h._legend._iOrientation=(b.TOP_RIGHT);h._colorList=[KJE.gColorList[2],KJE.gColorList[3]];h._showItemLabel=true;h._axisX.setVisible(false);var a=KJE.parameters.get("MSG_DROPPER_TITLE","Original auto loan:");var c=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","Monthly payment KJE1");var d=function(){return a+"|"+KJE.subText(KJE.getKJEReplaced(c,e.dollars(k.CURRENT_PAYMENT)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS",true,d,d),KJE.colorList[0]);var m=KJE.parameters.get("MSG_DROPPER2_TITLE","New auto loan:");var f=KJE.parameters.get("MSG_DROPPER2_CLOSETITLE","Monthly payment KJE1");var j=function(){return m+"|"+KJE.subText(KJE.getKJEReplaced(f,e.dollars(k.NEW_PAYMENT)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS2",true,j,j),KJE.colorList[0])};KJE.ShouldIRefiAuto.prototype.setValues=function(b){var a=KJE.inputs.items;b.ORIGINAL_TERM=a.ORIGINAL_TERM.getValue();b.NEW_TERM=a.NEW_TERM.getValue();b.ORIGINAL_LOAN_AMOUNT=a.ORIGINAL_LOAN_AMOUNT.getValue();b.ORIGINAL_RATE=a.ORIGINAL_RATE.getValue();b.NUMBER_OF_PAYMENTS_MADE=a.NUMBER_OF_PAYMENTS_MADE.getValue();b.NEW_RATE=a.NEW_RATE.getValue();b.CLOSING_COSTS=a.CLOSING_COSTS.getValue()};KJE.ShouldIRefiAuto.prototype.refresh=function(f){var e=KJE;var d=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[1];var c=KJE.gGraphs[0];KJE.setTitleTemplate();a.removeAll();a.setGraphCategories(f.catlabel);a.add(new KJE.gGraphDataSeries(f.DS_PAYMENTS,""));a.setTitleTemplate(f.MSG_MONTHLY_SAVINGS);a.paint();c.removeAll();c.setGraphCategories(f.cats);c.add(new KJE.gGraphDataSeries(f.DS_INTEREST,""));c.setTitle(f.MSG_TITLE);c.paint();b.CURRENT_BALANCE.setText(e.dollars(f.CURRENT_BALANCE,2));b.NEW_RATE_CALCULATED.setText(e.percent(f.NEW_RATE/100,3));b.NEW_TERM_CALCULATED.setText(e.number(f.NEW_TERM)+" "+KJE.MSG_MONTHS_LBL)};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-ORIGINAL_LOAN_AMOUNT'><input id='KJE-ORIGINAL_LOAN_AMOUNT' /></div> <div id='KJE-C-ORIGINAL_RATE'><input id='KJE-ORIGINAL_RATE' /></div> <div id='KJE-C-ORIGINAL_TERM'><input id='KJE-ORIGINAL_TERM' /></div> <div id='KJE-C-NUMBER_OF_PAYMENTS_MADE'><input id='KJE-NUMBER_OF_PAYMENTS_MADE' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div id='KJE-C-CURRENT_BALANCE'><div id='KJE-CURRENT_BALANCE'></div></div> <div id='KJE-C-NEW_RATE'><input id='KJE-NEW_RATE' /></div> <div id='KJE-C-NEW_TERM'><input id='KJE-NEW_TERM' /></div> <div id='KJE-C-CLOSING_COSTS'><input id='KJE-CLOSING_COSTS' /></div> <div id='KJE-C-NEW_RATE_CALCULATED'><div id='KJE-NEW_RATE_CALCULATED'></div></div> <div id='KJE-C-NEW_TERM_CALCULATED'><div id='KJE-NEW_TERM_CALCULATED'></div></div> <div class=KJEDropperSpacer></div> </div> **GRAPH2** **GRAPH1** ";KJE.DefinitionText=" <div id='KJE-D-ORIGINAL_LOAN_AMOUNT' ><dt>Original loan amount</dt><dd>Total amount for your original loan.</dd></div> <div id='KJE-D-ORIGINAL_RATE' ><dt>Original rate</dt><dd>Annual percentage rate of your original loan.</dd></div> <div id='KJE-D-ORIGINAL_TERM' ><dt>Original term</dt><dd>The total number of months for your original loan.</dd></div> <div id='KJE-D-NUMBER_OF_PAYMENTS_MADE' ><dt>Number of payments made</dt><dd>The total number of payments you have made on your original loan.</dd></div> <div><dt>Current payment</dt><dd>Current monthly principal and interest payment.</dd></div> <div id='KJE-D-NEW_RATE' ><dt>New rate</dt><dd>Annual percentage rate of your new loan.</dd></div> <div id='KJE-D-NEW_TERM' ><dt>New term</dt><dd>The total number of months for your new loan.</dd></div> <div id='KJE-D-CURRENT_BALANCE' ><dt>New loan balance</dt><dd>Total amount for your new refinanced loan. This amount is equal to your current balance on your original loan. Closing costs and prepayment penalties are assumed to be payable at the time of closing. Closing costs are not added to your new loan balance.</dd></div> <div id='KJE-D-CLOSING_COSTS' ><dt>Closing costs</dt><dd>Total fees and other costs associated with the new loan and paid at the time of closing. This calculator assumes that all closing costs are paid with proceeds other than the new loan (closing costs are not added to the total for your new loan amount).</dd></div> <div><dt>New payment</dt><dd>New monthly principal and interest payment.</dd></div> ";KJE.ReportText=' <!--HEADING "Auto Refinance Interest Savings" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>With this refinance you could INTEREST_SAVINGS_MSG.</h2> Over the life of your new loan your total interest paid could INTEREST_SAVINGS and your monthly payment could MONTHLY_SAVINGS per month. BREAK_EVEN_IN_MSG **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Auto Refinance Results</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell40">&nbsp;</td><th class="KJEHeading KJECell20" scope=\'col\'> Original Loan</th><th class="KJEHeading KJECell20" scope=\'col\'>New Loan</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Original loan amount</th><td class="KJECell KJECellBorder"> ORIGINAL_LOAN_AMOUNT</td><td class="KJECell">&nbsp;</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Number of payments made</th><td class="KJECell KJECellBorder"> NUMBER_OF_PAYMENTS_MADE</td><td class="KJECell">&nbsp;</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Closing costs</th><td class="KJECell KJECellBorder"> $0.00</td><td class="KJECell">CLOSING_COSTS</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Current loan balance</th><td class="KJECell KJECellBorder"> CURRENT_BALANCE</td><td class="KJECell">CURRENT_BALANCE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Remaining interest</th><td class="KJECell KJECellBorder"> REMAINING_INTEREST_ON_CURRENT_MORTGAGE</td><td class="KJECell"> INTEREST_ON_NEW_MORTGAGE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Interest rate</th><td class="KJECell KJECellBorder"> ORIGINAL_RATE</td><td class="KJECell">NEW_RATE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Term</th><td class="KJECell KJECellBorder"> ORIGINAL_TERM months</td><td class="KJECell">NEW_TERM months</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly Payment</th><td class="KJECell KJECellBorder"> CURRENT_PAYMENT</td><td class="KJECell">NEW_PAYMENT</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Interest payments</th><td class="KJECellStrong" colspan=2> Interest paid could INTEREST_SAVINGS.</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly payment</th><td class="KJECellStrong" colspan=2> Payment could MONTHLY_SAVINGS per month.</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Break even</th><td class="KJECellStrong" colspan=2> BREAK_EVEN_IN_MSG</td></tr> </tfoot> </table> </div> <h2 class=\'KJEReportHeader KJEFontHeading\'>Existing Loan vs. Refinance Comparison</h2> Refinancing could change your monthly payment for principal and interest from CURRENT_PAYMENT to NEW_PAYMENT. Your new loan could be CURRENT_BALANCE at NEW_RATE for NEW_TERM months. Closing costs are estimated at CLOSING_COSTS. **GRAPH** <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Payment Schedule</h2> **REPEATING GROUP** <p></p> **REPEATING GROUP2** ';
// 07/01/2024 Copyright 2024 KJE Computer Solutions, Inc.  Licensed for use on cu804.org

