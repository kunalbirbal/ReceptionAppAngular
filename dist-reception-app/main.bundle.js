webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accept-bill/accept-bill.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accept-bill/accept-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <app-app-sidenav></app-app-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Main Content Start -->\r\n    <mat-sidenav-content>\r\n        <div class=\"top-header\">\r\n            <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n            <span>Billing</span>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"formBx\" style=\"padding: 15px 0;\">\r\n\r\n                <div class=\"pageHeading\">\r\n                    Generate Bill\r\n                </div>\r\n\r\n                <form [formGroup]=\"billingForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Phone No.\" type=\"number\" formControlName=\"patient_contact\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"billingForm.controls['patient_contact'].touched && !billingForm.controls['patient_contact'].valid\">\r\n                                <span *ngIf=\"billingForm.controls['patient_contact'].hasError('required') \">\r\n                                    Phone No. is required\r\n                                </span>\r\n                                <span *ngIf=\"billingForm.controls['patient_contact'].hasError('pattern') \">\r\n                                    Invalid Phone No.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Paitient Name\" type=\"text\" formControlName=\"patient_name\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"billingForm.controls['patient_name'].touched && !billingForm.controls['patient_name'].valid\">\r\n                                <span *ngIf=\"billingForm.controls['patient_name'].hasError('required') \">\r\n                                    Name is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button mat-button type=\"button\" class=\"mat-raised-button mat-primary\" (click)=\"addTariffs()\">Add Tariffs</button>\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Tariff</th>\r\n                                    <th>Service Name</th>\r\n                                    <th>Service Category</th>\r\n                                    <th>Rate</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let tariff of appliedTariffs; let i = index\">\r\n                                    <td>{{tariff.tariff_name}}</td>\r\n                                    <td>{{tariff.service_name}}</td>\r\n                                    <td>{{tariff.service_category}}</td>\r\n                                    <td>{{tariff.rate}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Additional Charges\" type=\"number\" formControlName=\"add_charge\" (blur)=\"onAddChargeChange()\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Discount\" type=\"number\" formControlName=\"discount\" (blur)=\"onDiscountChange()\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Net Amount\" type=\"number\" formControlName=\"net_amount\" [readonly]=\"true\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Amount Paid\" type=\"number\" formControlName=\"amount_paid\" (blur)=\"onAmtPaidChange()\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Balance Amount\" type=\"number\" formControlName=\"balance_amt\" [readonly]=\"true\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Payment Mode\" formControlName=\"payment_mode\">\r\n                                    <mat-option *ngFor=\"let mode of modes\" [value]=\"mode\">\r\n                                        {{mode}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <div class=\"button-row mt-3\">\r\n                                <a routerLink=\"/view-bill\" class=\"mat-raised-button \">View Bills</a>\r\n                                <button type=\"submit\" [disabled]=\"!billingForm.valid\" mat-button class=\"mat-raised-button mat-primary\">Generate\r\n                                    Bill</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<!-- Main Content End -->"

/***/ }),

/***/ "./src/app/accept-bill/accept-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_bill__ = __webpack_require__("./src/app/accept-bill/sub-bill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bill_service__ = __webpack_require__("./src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bill_tariffs_bill_tariffs_component__ = __webpack_require__("./src/app/bill-tariffs/bill-tariffs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_appointment_service__ = __webpack_require__("./src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AcceptBillComponent = /** @class */ (function () {
    function AcceptBillComponent(formBuilder, router, route, dialog, billService, appointmentService, snackbar) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.billService = billService;
        this.appointmentService = appointmentService;
        this.snackbar = snackbar;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.hid = "hid1";
        this.tariffRates = [];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.options = ['One', 'Two', 'Three'];
        this.modes = ['Cash', 'Cheque', 'Online'];
        this.appliedTariffs = [];
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            if (params.appointment_id) {
                _this.appointmentService.getAppointmentById(params.appointment_id).subscribe(function (responsedata) {
                    var data = responsedata;
                    _this.appointment = data.response;
                    _this.billingForm.controls["patient_name"].setValue(_this.appointment.patient.name);
                    _this.billingForm.controls["patient_contact"].setValue(_this.appointment.patient.contact);
                    //fetching tariff rates.
                    _this.appointmentService.getTariffRatesByAppointment(_this.appointment.id).subscribe(function (responsedata) {
                        var data = responsedata;
                        _this.prepareTariffData(data.response);
                        //this.tariffRates = data.response;
                    });
                });
            }
        });
        this.billingForm = this.formBuilder.group({
            'patient_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'patient_contact': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(this.mobnumPattern)])],
            'add_charge': [''],
            'discount': [''],
            'net_amount': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'amount_paid': [''],
            'balance_amt': [''],
            'payment_mode': [''],
        });
    }
    AcceptBillComponent.prototype.prepareTariffData = function (tariffRates) {
        var _this = this;
        tariffRates.forEach(function (element) {
            var obj = { tariff_rate_id: element.id, tariff_name: element.tariff.name, service_name: element.service_name, service_category: element.service_category, rate: element.rate };
            if (element.is_mandatory) {
                _this.applyTariff(obj);
            }
            else {
                _this.tariffRates.push(obj);
            }
        });
        this.calculateNetAmount();
    };
    AcceptBillComponent.prototype.applyTariff = function (obj) {
        this.appliedTariffs.push(obj);
        this.calculateNetAmount();
    };
    AcceptBillComponent.prototype.applyMandatoryTariffs = function (tariffRates) {
        var _this = this;
        tariffRates.forEach(function (element) {
            if (element.is_mandatory) {
                var obj = { tariff_name: element.tariff.name, service_name: element.service_name, service_category: element.service_category, rate: element.rate };
                _this.appliedTariffs.push(obj);
            }
        });
    };
    AcceptBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (value) { return _this._filter(value); }));
    };
    AcceptBillComponent.prototype.calculateNetAmount = function () {
        var netAmount = 0;
        this.appliedTariffs.forEach(function (element) {
            netAmount += element.rate;
        });
        var addCharge = this.billingForm.controls["add_charge"].value;
        var discount = this.billingForm.controls["discount"].value;
        if (addCharge > 0) {
            netAmount += addCharge;
        }
        if (discount > 0) {
            netAmount -= discount;
        }
        var paidAmt = this.billingForm.controls["amount_paid"].value;
        var remaining = netAmount - paidAmt;
        this.billingForm.controls["balance_amt"].setValue(remaining);
        this.billingForm.controls["net_amount"].setValue(netAmount);
    };
    AcceptBillComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AcceptBillComponent.prototype.onClickAdd = function (tarName, servName) {
        var subBill = new __WEBPACK_IMPORTED_MODULE_4__sub_bill__["a" /* SubBillData */](tarName, servName);
        this.sub_bill.push(subBill);
    };
    AcceptBillComponent.prototype.onSubmit = function () {
        var _this = this;
        var req = {
            "appointment_id": this.appointment.id,
            "additional_charges": this.billingForm.controls["add_charge"].value,
            "discount_amount": this.billingForm.controls["discount"].value,
            "net_amount": this.billingForm.controls["net_amount"].value,
            "paid_amount": this.billingForm.controls["amount_paid"].value,
            "payment_mode": this.billingForm.controls["payment_mode"].value,
            "bill_tariffs": []
        };
        this.appliedTariffs.forEach(function (element) {
            req.bill_tariffs.push({ amount: element.rate, tariff_rate_id: element.tariff_rate_id, remark: '' });
        });
        this.billService.createBill(req)
            .subscribe(function (data) {
            _this.router.navigate(['view-bill']);
            _this.snackbar.open("Bill Generated Successfully", "", {
                duration: 4000,
            });
        }, function (error) {
            _this.snackbar.open("Bill Generation Failed", "", {
                duration: 4000,
            });
        });
    };
    // valuechange(newValue) {
    //   this.ratemodel = newValue;
    //   console.log(newValue)
    // }
    // chargechange(newValue) {
    //   this.chargemodel = newValue;
    //   console.log(newValue)
    // }
    AcceptBillComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    AcceptBillComponent.prototype.addTariffs = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__bill_tariffs_bill_tariffs_component__["a" /* BillTariffsComponent */], {
            width: '800px',
            data: { tariffs: this.tariffRates }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("result", result);
            if (result)
                _this.applyTariff(result.tariff);
        });
    };
    AcceptBillComponent.prototype.onAddChargeChange = function () {
        this.calculateNetAmount();
    };
    AcceptBillComponent.prototype.onDiscountChange = function () {
        this.calculateNetAmount();
    };
    AcceptBillComponent.prototype.onAmtPaidChange = function () {
        this.calculateNetAmount();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSidenav */])
    ], AcceptBillComponent.prototype, "sidenav", void 0);
    AcceptBillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accept-bill',
            template: __webpack_require__("./src/app/accept-bill/accept-bill.component.html"),
            styles: [__webpack_require__("./src/app/accept-bill/accept-bill.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_bill_service__["a" /* BillService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__services_bill_service__["a" /* BillService */], __WEBPACK_IMPORTED_MODULE_7__services_appointment_service__["a" /* AppointmentService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */]])
    ], AcceptBillComponent);
    return AcceptBillComponent;
}());



/***/ }),

/***/ "./src/app/accept-bill/sub-bill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubBillData; });
var SubBillData = /** @class */ (function () {
    function SubBillData(tarName, servName) {
        this.tariff_name = tarName;
        this.service_name = servName;
    }
    return SubBillData;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_patient_register_patient_component__ = __webpack_require__("./src/app/register-patient/register-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_appointment_book_appointment_component__ = __webpack_require__("./src/app/book-appointment/book-appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_appointments_manage_appointments_component__ = __webpack_require__("./src/app/manage-appointments/manage-appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accept_bill_accept_bill_component__ = __webpack_require__("./src/app/accept-bill/accept-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_bill_view_bill_component__ = __webpack_require__("./src/app/view-bill/view-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__ = __webpack_require__("./src/app/guards/AuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register-patient', component: __WEBPACK_IMPORTED_MODULE_4__register_patient_register_patient_component__["a" /* RegisterPatientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'book-appointment', component: __WEBPACK_IMPORTED_MODULE_5__book_appointment_book_appointment_component__["a" /* BookAppointmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'appointments', component: __WEBPACK_IMPORTED_MODULE_6__manage_appointments_manage_appointments_component__["a" /* ManageAppointmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'accept-bill', component: __WEBPACK_IMPORTED_MODULE_7__accept_bill_accept_bill_component__["a" /* AcceptBillComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'view-bill', component: __WEBPACK_IMPORTED_MODULE_8__view_bill_view_bill_component__["a" /* ViewBillComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-sidenav/app-sidenav.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.header-menu{\r\n    display: block;\r\n    padding: 0px;\r\n    margin-top: 20px;\r\n    width: 250px;\r\n}\r\n\r\n.header-menu li{\r\n    display: block;\r\n    list-style: none;\r\n}\r\n\r\n.header-menu li a{\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #333;\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #f7f7f7;\r\n}\r\n\r\n.header-menu li a span{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.header-menu li a i{\r\n    color: #fd6732;\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n\r\n.header-menu li a:hover, .header-menu li a:focus{\r\n    background: #f7f7f7;\r\n}\r\n\r\n.li-active{\r\n    background: #f7f7f7;\r\n}"

/***/ }),

/***/ "./src/app/app-sidenav/app-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-menu\">\r\n    <li><a routerLink=\"/home\" routerLinkActive=\"li-active\"><i class=\"material-icons\">home</i>\r\n            <span>Home</span></a></li>\r\n    <li><a routerLink=\"/register-patient\" routerLinkActive=\"li-active\"><i class=\"material-icons\">how_to_reg</i>\r\n            <span>Register Patient</span></a></li>\r\n    <li><a routerLink=\"/book-appointment\" routerLinkActive=\"li-active\"><i class=\"material-icons\">book</i>\r\n            <span>Book Appointments</span></a></li>\r\n    <li><a routerLink=\"/appointments\" routerLinkActive=\"li-active\"><i class=\"material-icons\">format_list_numbered</i>\r\n            <span>Manage Appointments</span></a></li>\r\n    <li><a routerLink=\"/accept-bill\" routerLinkActive=\"li-active\"><i class=\"material-icons\">payment</i>\r\n            <span>Accept Bills</span></a></li>\r\n    <li><a routerLink=\"/view-bill\" routerLinkActive=\"li-active\"><i class=\"material-icons\">payment</i>\r\n            <span>View Bills</span></a></li>\r\n    <li><a routerLink=\"/logout\" routerLinkActive=\"li-active\"><i class=\"material-icons\">power_settings_new</i>\r\n            <span>Logout</span></a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/app-sidenav/app-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidenavComponent = /** @class */ (function () {
    function AppSidenavComponent() {
    }
    AppSidenavComponent.prototype.ngOnInit = function () {
    };
    AppSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-sidenav',
            template: __webpack_require__("./src/app/app-sidenav/app-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/app-sidenav/app-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSidenavComponent);
    return AppSidenavComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.API_BASE_URL = "http://13.233.187.165:8080/harbor";
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_patient_register_patient_component__ = __webpack_require__("./src/app/register-patient/register-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__book_appointment_book_appointment_component__ = __webpack_require__("./src/app/book-appointment/book-appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_sidenav_app_sidenav_component__ = __webpack_require__("./src/app/app-sidenav/app-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__manage_appointments_manage_appointments_component__ = __webpack_require__("./src/app/manage-appointments/manage-appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__accept_bill_accept_bill_component__ = __webpack_require__("./src/app/accept-bill/accept-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__view_bill_view_bill_component__ = __webpack_require__("./src/app/view-bill/view-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_appointment_service__ = __webpack_require__("./src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_utility__ = __webpack_require__("./src/app/app.utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__bill_tariffs_bill_tariffs_component__ = __webpack_require__("./src/app/bill-tariffs/bill-tariffs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_bill_service__ = __webpack_require__("./src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_AuthGuard__ = __webpack_require__("./src/app/guards/AuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_patient_register_patient_component__["a" /* RegisterPatientComponent */],
                __WEBPACK_IMPORTED_MODULE_23__book_appointment_book_appointment_component__["a" /* BookAppointmentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__app_sidenav_app_sidenav_component__["a" /* AppSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_25__manage_appointments_manage_appointments_component__["a" /* ManageAppointmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__accept_bill_accept_bill_component__["a" /* AcceptBillComponent */],
                __WEBPACK_IMPORTED_MODULE_27__view_bill_view_bill_component__["a" /* ViewBillComponent */],
                __WEBPACK_IMPORTED_MODULE_30__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__bill_tariffs_bill_tariffs_component__["a" /* BillTariffsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__logout_logout_component__["a" /* LogoutComponent */]
                // AppGlobals,
                // AppConfig
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["b" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDialogModule */]
                // AppGlobals,
                // AppConfig
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_28__services_appointment_service__["a" /* AppointmentService */], __WEBPACK_IMPORTED_MODULE_29__app_utility__["a" /* AppUtility */], __WEBPACK_IMPORTED_MODULE_32__services_bill_service__["a" /* BillService */], __WEBPACK_IMPORTED_MODULE_33__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_35__guards_AuthGuard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_36__app_config__["a" /* AppConfig */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_30__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__bill_tariffs_bill_tariffs_component__["a" /* BillTariffsComponent */]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUtility; });
var AppUtility = /** @class */ (function () {
    function AppUtility() {
    }
    AppUtility.prototype.formatDate = function (date) {
        var d = date, month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    return AppUtility;
}());



/***/ }),

/***/ "./src/app/bill-tariffs/bill-tariffs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bill-tariffs/bill-tariffs.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"tariffsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <!-- <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" formControlName=\"myControl1\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n              {{option}}  \r\n              </mat-option>\r\n          </mat-autocomplete>\r\n      </mat-form-field> -->\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Choose tariff\" formControlName=\"tariff_name\" (change)=\"setTariff()\">\r\n            <mat-option *ngFor=\"let tariff of tariffRates\" [value]=\"tariff\">\r\n              {{tariff.tariff_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"errTxt\" *ngIf=\"tariffsForm.controls['tariff_name'].touched && !tariffsForm.controls['tariff_name'].valid\">\r\n          <span *ngIf=\"tariffsForm.controls['tariff_name'].hasError('required') \">\r\n            Please Enter Tariff Name\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Service Name\" type=\"text\" #servName formControlName=\"service_name\">\r\n        </mat-form-field>\r\n        <div class=\"errTxt\" *ngIf=\"tariffsForm.controls['service_name'].touched && !tariffsForm.controls['service_name'].valid\">\r\n          <span *ngIf=\"tariffsForm.controls['service_name'].hasError('required') \">\r\n            Please Enter Service Name\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"col-12\">\r\n      <div class=\"button-row mt-3\">\r\n          <button type=\"button\" (click)=\"onClickAdd(tarName.value, servName.value); tarName.value=''; servName.value='' \" mat-button class=\"mat-raised-button mat-primary\">Add</button>\r\n      </div>\r\n  </div> -->\r\n\r\n      <div class=\"col-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Service Cateory\" type=\"text\" formControlName=\"service_category\">\r\n        </mat-form-field>\r\n        <div class=\"errTxt\" *ngIf=\"tariffsForm.controls['service_category'].touched && !tariffsForm.controls['service_category'].valid\">\r\n          <span *ngIf=\"tariffsForm.controls['service_category'].hasError('required') \">\r\n            Please Enter Category\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Rate\" type=\"number\" formControlName=\"rate\">\r\n          <!-- [ngModel]=\"ratemodel\" (ngModelChange)=\"valuechange($event)\" -->\r\n        </mat-form-field>\r\n        <div class=\"errTxt\" *ngIf=\"tariffsForm.controls['rate'].touched && !tariffsForm.controls['rate'].valid\">\r\n          <span *ngIf=\"tariffsForm.controls['rate'].hasError('required') \">\r\n            Please Enter Rate/Amount\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"button-row mt-3\">\r\n          <button type=\"submit\" [disabled]=\"!tariffsForm.valid\" mat-button class=\"mat-raised-button mat-primary\" >Add</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/bill-tariffs/bill-tariffs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillTariffsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__ = __webpack_require__("./src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BillTariffsComponent = /** @class */ (function () {
    function BillTariffsComponent(dialogData, dialogRef, formBuilder, appointmentService) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
        this.tariffRates = [];
        if (dialogData.hasOwnProperty("tariffs")) {
            this.tariffRates = dialogData.tariffs;
        }
        this.tariffsForm = this.formBuilder.group({
            'tariff_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'service_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'service_category': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'rate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            "tariff_rate_id": [""]
        });
    }
    BillTariffsComponent.prototype.ngOnInit = function () {
    };
    BillTariffsComponent.prototype.setTariff = function () {
        var tariff = this.tariffsForm.controls["tariff_name"].value;
        this.tariffsForm.controls["service_name"].setValue(tariff.service_name);
        this.tariffsForm.controls["service_category"].setValue(tariff.service_category);
        this.tariffsForm.controls["rate"].setValue(tariff.rate);
        this.tariffsForm.controls["tariff_rate_id"].setValue(tariff.tariff_rate_id);
    };
    BillTariffsComponent.prototype.onSubmit = function () {
        var selectedTariff = this.tariffsForm.value;
        selectedTariff.tariff_name = selectedTariff.tariff_name.tariff_name;
        this.dialogRef.close({ "tariff": selectedTariff });
    };
    BillTariffsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bill-tariffs',
            template: __webpack_require__("./src/app/bill-tariffs/bill-tariffs.component.html"),
            styles: [__webpack_require__("./src/app/bill-tariffs/bill-tariffs.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__["a" /* AppointmentService */]])
    ], BillTariffsComponent);
    return BillTariffsComponent;
}());



/***/ }),

/***/ "./src/app/book-appointment/book-appointment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-appointment/book-appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <app-app-sidenav></app-app-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Main Content Start -->\r\n    <mat-sidenav-content>\r\n        <div class=\"top-header\">\r\n            <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n            <span>Book Appointment</span>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"formBx\">\r\n\r\n                <div class=\"pageHeading\">\r\n                    Book Appointment\r\n                </div>\r\n\r\n                <form [formGroup]=\"appointmentForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Phone No.\" type=\"number\" formControlName=\"contact\" (blur)=\"getPatientName(appointmentForm.controls.contact.value)\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['contact'].touched && !appointmentForm.controls['contact'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['contact'].hasError('required') \">\r\n                                    Phone No. is required\r\n                                </span>\r\n                                <span *ngIf=\"appointmentForm.controls['contact'].hasError('pattern') \">\r\n                                    Invalid Phone No.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Full Name\" type=\"text\" formControlName=\"patient_name\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['patient_name'].touched && !appointmentForm.controls['patient_name'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['patient_name'].hasError('required') \">\r\n                                    Name is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Choose Doctor\" formControlName=\"doctor\" required (change)=\"getDepartments(appointmentForm.controls.doctor.value)\">\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let doctor of doctorList\" [value]=\"doctor\">\r\n                                        {{doctor.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['doctor'].touched && !appointmentForm.controls['doctor'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['doctor'].hasError('required') \">\r\n                                    Doctor is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Choose Department\" formControlName=\"department\" required\r\n                                    (change)=\"getRoom(appointmentForm.controls.department.value)\">\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let department of departmentList\" [value]=\"department\">\r\n                                        {{department.department.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['department'].touched && !appointmentForm.controls['department'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['department'].hasError('required') \">\r\n                                    Department is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Room Name\" type=\"text\" formControlName=\"room_name\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" placeholder=\"Choose a date\"\r\n                                (dateChange)=\"getSlots()\" >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker touchUi #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['date'].touched && !appointmentForm.controls['date'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['date'].hasError('required') \">\r\n                                    Date is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Choose Slot\" formControlName=\"slot\" required>\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let slot of slots\" [value]=\"slot\" [disabled]=\"slot.status != 0\">\r\n                                        {{slot.start_time + \" - \" + slot.end_time}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"appointmentForm.controls['slot'].touched && !appointmentForm.controls['slot'].valid\">\r\n                                <span *ngIf=\"appointmentForm.controls['slot'].hasError('required') \">\r\n                                    Slot is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <div class=\"button-row mt-3\">\r\n                                <button type=\"submit\" [disabled]=\"!appointmentForm.valid\" mat-button class=\"mat-raised-button mat-primary\">Book Appointment</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<!-- Main Content End -->"

/***/ }),

/***/ "./src/app/book-appointment/book-appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_appointment_service__ = __webpack_require__("./src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_utility__ = __webpack_require__("./src/app/app.utility.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookAppointmentComponent = /** @class */ (function () {
    function BookAppointmentComponent(formBuilder, snackbar, utility, appointmentService, snackBar) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.utility = utility;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.hid = "hid1";
        this.appointmentForm = this.formBuilder.group({
            'doctor': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'department': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'patient_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'room_name': [''],
            'contact': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(this.mobnumPattern)])],
            'slot': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'hid': [this.hid],
            'date': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
        this.appointmentService.getDoctorList().subscribe(function (responsedata) {
            var data = responsedata;
            if (data.response.length == 0) {
                var snackBarRef = _this.snackBar.open("Doctor list is empty.", "", { duration: 3000 });
            }
            _this.doctorList = data.response;
        });
    }
    BookAppointmentComponent.prototype.ngOnInit = function () {
    };
    BookAppointmentComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    BookAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        var req = {
            "mobile": this.appointmentForm.controls["contact"].value,
            "patient_name": this.appointmentForm.controls["patient_name"].value,
            "slot_id": this.appointmentForm.controls["slot"].value.id,
        };
        this.appointmentService.createAppointment(req)
            .subscribe(function (data) {
            _this.appointmentForm.reset();
            _this.appointmentForm.markAsPristine();
            _this.appointmentForm.markAsUntouched();
            _this.appointmentForm.updateValueAndValidity();
            console.log(JSON.stringify(data));
            console.log("Appointment Booked Successfully");
            _this.snackbar.open("Appointment Booked Successfully", "", {
                duration: 4000,
            });
        }, function (error) {
            console.log("Appointment Booking Failed");
            _this.snackbar.open("Appointment Booking Failed", "", {
                duration: 4000,
            });
            console.log(error);
        });
    };
    BookAppointmentComponent.prototype.getAppointments = function () {
    };
    BookAppointmentComponent.prototype.getPatientName = function (contact) {
        var _this = this;
        this.appointmentService.getPatientByMobile(contact).subscribe(function (responsedata) {
            var data = responsedata;
            if (data.response != null) {
                _this.appointmentForm.controls["patient_name"].setValue(data.response.name);
            }
        });
    };
    BookAppointmentComponent.prototype.getDepartments = function (doctor) {
        var _this = this;
        this.appointmentService.getDepartmentsByDoctor(doctor.id).subscribe(function (responsedata) {
            var data = responsedata;
            if (data.response != null) {
                _this.departmentList = data.response;
            }
        });
    };
    BookAppointmentComponent.prototype.getRoom = function (department) {
        this.appointmentForm.controls["room_name"].setValue(department.room_name);
    };
    BookAppointmentComponent.prototype.getSlots = function () {
        var _this = this;
        console.log("getSlots", this.appointmentForm.controls["date"].value);
        var date = this.appointmentForm.controls["date"].value;
        var date1 = this.utility.formatDate(date);
        var criteria = {
            "department_id": this.appointmentForm.controls["department"].value.department.id,
            "doctor_id": this.appointmentForm.controls["doctor"].value.id,
            "date": date1
        };
        this.appointmentService.getSlots(criteria).subscribe(function (responsedata) {
            var data = responsedata;
            console.log(data.response);
            if (data.response != null) {
                _this.slots = data.response;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSidenav */])
    ], BookAppointmentComponent.prototype, "sidenav", void 0);
    BookAppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-appointment',
            template: __webpack_require__("./src/app/book-appointment/book-appointment.component.html"),
            styles: [__webpack_require__("./src/app/book-appointment/book-appointment.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_appointment_service__["a" /* AppointmentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__app_utility__["a" /* AppUtility */], __WEBPACK_IMPORTED_MODULE_3__services_appointment_service__["a" /* AppointmentService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */]])
    ], BookAppointmentComponent);
    return BookAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"text-truncate\">{{title}}</h2>\r\n<mat-dialog-content [innerHTML]=\"confirmMsg\"></mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <div class=\"col-sm-12 text-right pr-0\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">Yes</button>\r\n    <button mat-raised-button mat-dialog-close>No</button>\r\n    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogData) {
        this.dialogData = dialogData;
        this.title = "Please confirm your action.";
        this.confirmMsg = "Are you sure you want to perform this action?";
        console.log(dialogData);
        if (dialogData.hasOwnProperty("title"))
            this.title = dialogData.title;
        if (dialogData.hasOwnProperty("confirmMsg"))
            this.confirmMsg = dialogData.confirmMsg;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.less")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/guards/AuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('auth')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\r\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n    <app-app-sidenav></app-app-sidenav>\r\n  </mat-sidenav>\r\n\r\n  <!-- Main Content Start -->\r\n  <mat-sidenav-content>\r\n    <div class=\"top-header\">\r\n        <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n        <span>Home</span>\r\n    </div>\r\n    \r\n    <div class=\"container-fluid mb-3\">  \r\n        <div class=\"main-logo\">\r\n            <img src=\"assets/images/harbor-logo.png\"/>\r\n        </div>\r\n\r\n        <!-- Home Content Menus -->\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <a routerLink=\"/register-patient\" class=\"home-menu-box\">\r\n                        <i class=\"material-icons\">how_to_reg</i>\r\n                        <span>Register<br/>Patient</span>\r\n                    </a>      \r\n                </div>\r\n                <div class=\"col\">\r\n                    <a routerLink=\"/book-appointment\" class=\"home-menu-box\">\r\n                        <i class=\"material-icons\">book</i>\r\n                        <span>Book<br/>Appointments</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <a routerLink=\"/appointments\" class=\"home-menu-box\">\r\n                        <i class=\"material-icons\">format_list_numbered</i>\r\n                        <span>Manage<br/>Appointments</span>\r\n                    </a>      \r\n                </div>\r\n                <div class=\"col\">\r\n                    <a routerLink=\"/accept-bill\" class=\"home-menu-box\">\r\n                        <i class=\"material-icons\">payment</i>\r\n                        <span>Accept<br/>Bills</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Home Content Menus End -->\r\n\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenav */])
    ], HomeComponent.prototype, "sidenav", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"loginBx\">\r\n\r\n        <div class=\"main-logo\">\r\n            <img src=\"assets/images/harbor-logo.png\"/>\r\n        </div>\r\n\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"username\">\r\n                    <i matSuffix class=\"material-icons suffix-icon\">person</i>\r\n                  </mat-form-field>\r\n                  <div class=\"errTxt\" *ngIf=\"loginForm.controls['username'].touched && !loginForm.controls['username'].valid\">  \r\n                      <span *ngIf=\"loginForm.controls['username'].hasError('required') \">  \r\n                          Username is required  \r\n                      </span> \r\n                  </div> \r\n              </div>\r\n              <div class=\"col-12\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n                  <i matSuffix class=\"material-icons suffix-icon\">lock</i>\r\n                </mat-form-field>\r\n                <div class=\"errTxt\" *ngIf=\"loginForm.controls['password'].touched && !loginForm.controls['password'].valid\">  \r\n                    <span *ngIf=\"loginForm.controls['password'].hasError('required') \">  \r\n                        Password is required  \r\n                    </span> \r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                  <div class=\"button-row mt-3\">\r\n                      <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-button class=\"mat-raised-button mat-primary\">Login</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, appService, snackbar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.appService = appService;
        this.snackbar = snackbar;
        this.loginForm = this.formBuilder.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
        var auth = localStorage.getItem("auth");
        if (auth != null) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.appService.login(this.loginForm.value)
            .subscribe(function (resp) {
            var r = resp;
            localStorage.setItem("auth", JSON.stringify(r.response));
            _this.router.navigate(['/']);
            console.log("Login Successfull!");
        }, function (error) {
            console.log("Login Failed!");
            _this.snackbar.open("Invalid credentials.", "", {
                duration: 4000,
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.serviceUrl = "http://localhost:1010/ReceptionApp-WebService/login";
    }
    LoginService.prototype.loginUser = function (loginData) {
        console.log(loginData);
        return this._http.post(this.serviceUrl, loginData, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('Content-Type', 'application/json'),
            observe: 'response'
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
        localStorage.removeItem("auth");
        this.router.navigate(['/login']);
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/manage-appointments/manage-appointments.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage-appointments/manage-appointments.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <app-app-sidenav></app-app-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Main Content Start -->\r\n    <mat-sidenav-content>\r\n        <div class=\"top-header\">\r\n            <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n            <span>Appointments</span>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n\r\n            <div class=\"pageHeading\" style=\"margin-top:60px;\">\r\n                Manage Appointments\r\n            </div>\r\n\r\n            <!-- Appointment lists -->\r\n            <div class=\"appointment-box\">\r\n                <form [formGroup]=\"searchAppointmentForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                    <div class=\"col-12\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Choose Doctor\" formControlName=\"doctor\" required>\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let doctor of doctorList\" [value]=\"doctor\">\r\n                                    {{doctor.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"mb-2\">\r\n                        <span>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" placeholder=\"Choose a date\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker touchUi #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </span>\r\n                        <!-- <div class=\"button-row mt-3\">\r\n                        <button type=\"submit\" [disabled]=\"!getAppointment.valid\" mat-button class=\"mat-raised-button mat-primary\">View Appointments</button>\r\n                    </div> -->\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button type=\"submit\" [disabled]=\"!searchAppointmentForm.valid\" mat-button class=\"mat-raised-button mat-primary\">Search</button>\r\n                    </div>\r\n                </form>\r\n\r\n                <ul class=\"app-list\">\r\n                    <li *ngFor=\"let result of results; let i = index\">\r\n                        <span class=\"li-span\">{{ i + 1 }}</span>\r\n                        <span class=\"li-span\">{{ result.patient.name }}</span>\r\n                        <span class=\"li-span\">{{ result.slot.start_time + \"-\"+ result.slot.end_time }}</span>\r\n                        <span class=\"li-span\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"closeAppointment(result)\" [disabled]=\"result.status == 2\">Close</button>\r\n                        </span>\r\n                        <span class=\"li-span\">\r\n                            <mat-menu class=\"appntMenu\" #editAppnt=\"matMenu\" [overlapTrigger]=\"false\">\r\n                                <button mat-menu-item (click)=\"goToPaymentPage(result)\">Make Payment</button>\r\n\r\n                            </mat-menu>\r\n\r\n                            <button class=\"editAppntBtn\" mat-icon-button [matMenuTriggerFor]=\"editAppnt\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                            </button>\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<!-- Main Content End -->"

/***/ }),

/***/ "./src/app/manage-appointments/manage-appointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAppointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_appointment_service__ = __webpack_require__("./src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_utility__ = __webpack_require__("./src/app/app.utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageAppointmentsComponent = /** @class */ (function () {
    function ManageAppointmentsComponent(formBuilder, router, dialog, appointmentService, utility, snackbar, datepipe) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.utility = utility;
        this.snackbar = snackbar;
        this.datepipe = datepipe;
        this.hid = "hid1";
        this.searchAppointmentForm = this.formBuilder.group({
            'date': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            'doctor': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
        });
        this.appointmentService.getDoctorList().subscribe(function (responsedata) {
            var data = responsedata;
            _this.doctorList = data.response;
        });
    }
    ManageAppointmentsComponent.prototype.ngOnInit = function () {
        this.date = new Date();
        var latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        this.newdate = latest_date.toString();
        console.log(this.newdate);
        //this.getApps(this.hid, this.newdate);
    };
    ManageAppointmentsComponent.prototype.onChange = function ($event) {
        // this.date=new Date();
        // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
        // this.newdate = latest_date.toString();
        // console.log(this.newdate);
        // this.getApps(this.hid, this.newdate);
    };
    ManageAppointmentsComponent.prototype.onSubmit = function () {
        var _this = this;
        var date1 = this.utility.formatDate(this.searchAppointmentForm.controls["date"].value);
        var req = {
            "date": date1,
            "doctor_id": this.searchAppointmentForm.controls["doctor"].value.id
        };
        this.appointmentService.searchAppointment(req)
            .subscribe(function (data) {
            _this.results = data.response;
        }, function (error) {
            console.log(error);
        });
    };
    ManageAppointmentsComponent.prototype.closeAppointment = function (appointment) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: '300px',
            data: { title: "Close the Appointment", confirmMsg: 'Do you really want to close the appointment?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("result", result);
            if (result) {
                var req = { id: appointment.id, status: 2 };
                //this.helpers.loading("submit-video-activity");
                _this.appointmentService.updateAppointment(req).subscribe(function (data) {
                    //this.helpers.unloading("submit-video-activity");
                    _this.onSubmit();
                    var snackBarRef = _this.snackbar.open("Appointment has been closed successfully! ", "", { duration: 3000 });
                });
            }
            console.log('The dialog was closed', result);
        });
    };
    ManageAppointmentsComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    ManageAppointmentsComponent.prototype.goToPaymentPage = function (appointment) {
        this.router.navigate(['accept-bill'], { queryParams: { appointment_id: appointment.id } });
        console.log(appointment);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenav */])
    ], ManageAppointmentsComponent.prototype, "sidenav", void 0);
    ManageAppointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manage-appointments',
            template: __webpack_require__("./src/app/manage-appointments/manage-appointments.component.html"),
            styles: [__webpack_require__("./src/app/manage-appointments/manage-appointments.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_appointment_service__["a" /* AppointmentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_appointment_service__["a" /* AppointmentService */], __WEBPACK_IMPORTED_MODULE_5__app_utility__["a" /* AppUtility */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], ManageAppointmentsComponent);
    return ManageAppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/register-patient/register-patient.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-patient/register-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <app-app-sidenav></app-app-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Main Content Start -->\r\n    <mat-sidenav-content>\r\n        <div class=\"top-header\">\r\n            <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n            <span>Register Patient</span>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"formBx\">\r\n\r\n                <div class=\"pageHeading\">\r\n                    Register Patient\r\n                </div>\r\n\r\n                <form [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\" enctype='multipart/form-data' novalidate>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Full Name\" type=\"text\" formControlName=\"name\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"patientForm.controls['name'].touched && !patientForm.controls['name'].valid\">\r\n                                <span *ngIf=\"patientForm.controls['name'].hasError('required') \">\r\n                                    Name is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Phone No.\" type=\"number\" formControlName=\"contact\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"patientForm.controls['contact'].touched && !patientForm.controls['contact'].valid\">\r\n                                <span *ngIf=\"patientForm.controls['contact'].hasError('required') \">\r\n                                    Phone No. is required\r\n                                </span>\r\n                                <span *ngIf=\"patientForm.controls['contact'].hasError('pattern') \">\r\n                                    Invalid Phone No.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Aadhar No.\" type=\"number\" formControlName=\"aadhar_no\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Address\" type=\"text\" formControlName=\"address\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"State\" type=\"text\" formControlName=\"state\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Pin Code\" type=\"number\" formControlName=\"pincode\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <p style=\"margin-bottom: 0; color: #686868;\"><label>Gender</label></p>\r\n                            <mat-radio-group formControlName=\"gender\">\r\n                                <mat-radio-button value=\"1\">Male</mat-radio-button>\r\n                                <mat-radio-button value=\"0\">Female</mat-radio-button>\r\n                            </mat-radio-group>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Age\" type=\"number\" formControlName=\"age\">\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Email Address\" type=\"email\" formControlName=\"email\">\r\n                            </mat-form-field>\r\n                            <div class=\"errTxt\" *ngIf=\"patientForm.controls['email'].touched && !patientForm.controls['email'].valid\">\r\n                                <span *ngIf=\"patientForm.controls['email'].hasError('email') \">\r\n                                    Invalid Email Address.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"col-12\">\r\n                        <p style=\"margin-bottom: 0; color: #686868;\"><label>Upload Photo</label></p>\r\n                        <input type=\"file\" formControlName=\"photo\" placeholder=\"Upload Photo\">\r\n                    </div>  -->\r\n\r\n                        <div class=\"col-12\">\r\n                            <div class=\"button-row mt-3 mb-2\">\r\n                                <button type=\"submit\" [disabled]=\"!patientForm.valid\" mat-button class=\"mat-raised-button mat-primary\">Register</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<!-- Main Content End -->"

/***/ }),

/***/ "./src/app/register-patient/register-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_patient_service__ = __webpack_require__("./src/app/services/patient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPatientComponent = /** @class */ (function () {
    function RegisterPatientComponent(formBuilder, patientService, snackbar) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.snackbar = snackbar;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.patientForm = this.formBuilder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            'contact': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(this.mobnumPattern)])],
            'aadhar_no': [''],
            'address': [''],
            'city': [''],
            'state': [''],
            'pincode': [''],
            'gender': [''],
            'age': [''],
            'email': [''],
        });
    }
    RegisterPatientComponent.prototype.ngOnInit = function () {
    };
    RegisterPatientComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    RegisterPatientComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.patientForm.value);
        this.patientService.createPatient(this.patientForm.value)
            .subscribe(function (data) {
            _this.patientForm.reset();
            _this.patientForm.updateValueAndValidity();
            _this.patientForm.markAsUntouched();
            _this.patientForm.markAsPristine();
            _this.snackbar.open("Patient Registered Successfully", "", {
                duration: 4000,
            });
        }, function (error) {
            console.log("Registration Failed");
            _this.snackbar.open("Registration Failed", "", {
                duration: 4000,
            });
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSidenav */])
    ], RegisterPatientComponent.prototype, "sidenav", void 0);
    RegisterPatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-patient',
            template: __webpack_require__("./src/app/register-patient/register-patient.component.html"),
            styles: [__webpack_require__("./src/app/register-patient/register-patient.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_patient_service__["a" /* PatientService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */]])
    ], RegisterPatientComponent);
    return RegisterPatientComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.httpOptions = null;
        this.auth = null;
        var authdata = localStorage.getItem("auth");
        var authtoken = "";
        if (null != authdata) {
            var auth = JSON.parse(authdata);
            this.auth = auth;
            authtoken = this.auth.authtoken;
        }
        var headers = { 'Authorization': 'Token ' + authtoken };
        //let headers: any = { 'Authorization': 'Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtcmNvb2wiLCJ1c2VySWQiOiI5Iiwicm9sZSI6ImFkbWluIn0.YvfUxAwoHSibYxDHZ5ZLyLok5LQ1TvapRqfTQpHZObwK5By3hi_U3Hrqoh371-LOb1MbXgq0hDJwJnABlE93mw' };
        this.httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](headers) };
    }
    AppService.prototype.login = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/app/login", req, this.httpOptions);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentService = /** @class */ (function () {
    function AppointmentService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.httpOptions = null;
        //private apiBaseUrl: string = "http://localhost:8090";
        //private apiBaseUrl: string = "http://ec2-13-233-122-194.ap-south-1.compute.amazonaws.com:8080/harbor";
        this.auth = null;
        var authdata = localStorage.getItem("auth");
        var authtoken = "";
        if (null != authdata) {
            var auth = JSON.parse(authdata);
            this.auth = auth;
            authtoken = this.auth.authtoken;
        }
        var headers = { 'Authorization': 'Token ' + authtoken };
        this.httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](headers) };
    }
    AppointmentService.prototype.getDoctorList = function () {
        return this.http.get(this.appConfig.API_BASE_URL + "/api/doctor/list", this.httpOptions);
    };
    AppointmentService.prototype.getPatientByMobile = function (mobile) {
        return this.http.get(this.appConfig.API_BASE_URL + "/api/patient/mobile/" + mobile, this.httpOptions);
    };
    AppointmentService.prototype.getDepartmentsByDoctor = function (doctor) {
        return this.http.get(this.appConfig.API_BASE_URL + "/api/doctor/" + doctor + "/departments", this.httpOptions);
    };
    AppointmentService.prototype.getSlots = function (criteria) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/doctor/slots", criteria, this.httpOptions);
    };
    AppointmentService.prototype.createAppointment = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/appointment/create", req, this.httpOptions);
    };
    AppointmentService.prototype.updateAppointment = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/appointment/update", req, this.httpOptions);
    };
    AppointmentService.prototype.searchAppointment = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/appointment/search", req, this.httpOptions);
    };
    AppointmentService.prototype.getTariffRatesByAppointment = function (appointmentId) {
        return this.http.get(this.appConfig.API_BASE_URL + "/api/tariffs/appointment/" + appointmentId, this.httpOptions);
    };
    AppointmentService.prototype.getAppointmentById = function (appointmentId) {
        return this.http.get(this.appConfig.API_BASE_URL + "/api/appointment/" + appointmentId, this.httpOptions);
    };
    AppointmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/services/bill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillService = /** @class */ (function () {
    function BillService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.httpOptions = null;
        this.auth = null;
        var authdata = localStorage.getItem("auth");
        if (null != authdata) {
            var auth = JSON.parse(authdata);
            this.auth = auth;
        }
        var headers = { 'Authorization': 'Token ' + this.auth.authtoken };
        this.httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](headers) };
    }
    BillService.prototype.createBill = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/bill/create", req, this.httpOptions);
    };
    BillService.prototype.getBills = function (criteria) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/bill/search", criteria, this.httpOptions);
    };
    BillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], BillService);
    return BillService;
}());



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.httpOptions = null;
        this.auth = null;
        var authdata = localStorage.getItem("auth");
        if (null != authdata) {
            var auth = JSON.parse(authdata);
            this.auth = auth;
        }
        var headers = { 'Authorization': 'Token ' + this.auth.authtoken };
        this.httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](headers) };
    }
    PatientService.prototype.createPatient = function (req) {
        return this.http.post(this.appConfig.API_BASE_URL + "/api/patient/create", req, this.httpOptions);
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/view-bill/get-bill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetBillService = /** @class */ (function () {
    function GetBillService(_http) {
        this._http = _http;
        this.serviceUrl = "http://localhost:1010/ReceptionApp-WebService/viewbill";
    }
    GetBillService.prototype.getBills = function (hid) {
        return this._http
            .get(this.serviceUrl + "?hid=" + hid)
            .map(function (results) { return results; });
    };
    GetBillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetBillService);
    return GetBillService;
}());



/***/ }),

/***/ "./src/app/view-bill/view-bill.component.css":
/***/ (function(module, exports) {

module.exports = ".table-bill th, .table-bill td{\r\n    white-space: nowrap;\r\n    padding: 5px;\r\n    font-size: 14px;\r\n}\r\n.btn-a{\r\n    padding: 3px 5px 1px; \r\n    line-height: 1;\r\n}\r\n.formBx{\r\n    padding: 15px 0;\r\n}"

/***/ }),

/***/ "./src/app/view-bill/view-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <app-app-sidenav></app-app-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Main Content Start -->\r\n    <mat-sidenav-content>\r\n        <div class=\"top-header\">\r\n            <button mat-button class=\"toggle-menu\" (click)=\"sidenav.open()\"><i class=\"material-icons\">menu</i></button>\r\n            <span>Billing</span>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"formBx\">\r\n\r\n                <div class=\"pageHeading\">\r\n                    View Bills\r\n                </div>\r\n\r\n                <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search using Bill Id, Name, Contact\">\r\n                </mat-form-field>\r\n\r\n                <table class=\"table table-responsive table-bordered table-bill\">\r\n                    <thead class=\"thead-light\">\r\n                        <tr>\r\n                            <th>Sr.</th>\r\n                            <th>Bill Id</th>\r\n                            <th>App. Id</th>\r\n                            <th>Name</th>\r\n                            <th>Contact</th>\r\n                            <th>Net Amount</th>\r\n                            <th>Amount Paid</th>\r\n                            <th>Bal Amount</th>\r\n                            <th>Date</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let result of results; let i = index\">\r\n                            <td>{{ i+1 }}</td>\r\n                            <td>{{ result.id }}</td>\r\n                            <td>{{ result.hasOwnProperty(\"appointment\")  && result.appointment ? result.appointment.id : \"\" }}</td>\r\n                            <td>{{ result.hasOwnProperty(\"appointment\") && result.appointment ? result.appointment.patient.name:\"\" }}</td>\r\n                            <td>{{ result.hasOwnProperty(\"appointment\") && result.appointment ? result.appointment.patient.contact:\"\" }}</td>\r\n                            <td>{{ result.net_amount }}</td>\r\n                            <td>{{ result.paid_amount }}</td>\r\n                            <td>{{ result.net_amount - result.paid_amount }}</td>\r\n                            <td>{{ result.updated }}</td>\r\n                            <td>\r\n                                <a class=\"btn btn-info btn-sm btn-a\" routerLink=\"bill-details?bid={{ result.bill_id }}\">\r\n                                    <i class=\"material-icons\" style=\"font-size: 16px;\">view_list</i>\r\n                                </a>\r\n                                <a class=\"btn btn-primary btn-sm btn-a\" routerLink=\"edit-bill?bid={{ result.bill_id }}\">\r\n                                    <i class=\"material-icons\" style=\"font-size: 16px;\">edit</i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<!-- Main Content End -->"

/***/ }),

/***/ "./src/app/view-bill/view-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_bill_service__ = __webpack_require__("./src/app/view-bill/get-bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bill_service__ = __webpack_require__("./src/app/services/bill.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewBillComponent = /** @class */ (function () {
    function ViewBillComponent(billService, snackbar) {
        this.billService = billService;
        this.snackbar = snackbar;
        this.hid = "hid1";
        this.results = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatTableDataSource */](this.results);
    }
    ViewBillComponent.prototype.ngOnInit = function () {
        this.getBills({});
    };
    ViewBillComponent.prototype.applyFilter = function (filterValue) {
        this.getBills({ id: filterValue.trim() });
        //this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ViewBillComponent.prototype.getBills = function (criteria) {
        var _this = this;
        this.billService.getBills(criteria)
            .subscribe(function (data) {
            var res = data;
            _this.results = res.response;
        }, function (error) {
            _this.snackbar.open('Unable to fetch Bills', '', {
                duration: 4000
            });
        });
    };
    ViewBillComponent.prototype.close = function (reason) {
        this.sidenav.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenav */])
    ], ViewBillComponent.prototype, "sidenav", void 0);
    ViewBillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-bill',
            template: __webpack_require__("./src/app/view-bill/view-bill.component.html"),
            styles: [__webpack_require__("./src/app/view-bill/view-bill.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__get_bill_service__["a" /* GetBillService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_bill_service__["a" /* BillService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */]])
    ], ViewBillComponent);
    return ViewBillComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map