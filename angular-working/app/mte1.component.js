System.register(["angular2/core", "angular2/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, MTEComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            MTEComponent = (function () {
                function MTEComponent(_router) {
                    this._router = _router;
                    this.title = 'Welcome to world of freedom';
                    this.loginId = '';
                    this.pwd = '';
                    this.selectedXDays = '0';
                    this.selectedYDays = '0';
                    this.selectedXMonth = '0';
                    this.selectedYMonth = '0';
                    this.seriesAData = [];
                    this.seriesBData = [];
                    this.seriesCData = [];
                    this.seriesDData = [];
                    this.monthlyData = '';
                    this.dailyData = '';
                    this.seriesMonthData = [];
                    this.seriesDaysData = [];
                    this.data = {};
                    this.lineChartData_month = [
                        { data: this.seriesAData, label: 'Incidents Month Wise' }
                    ];
                    this.lineChartLabels_month = this.seriesBData;
                    this.lineChartOptions_month = {
                        responsive: true
                    };
                    this.lineChartColors_month = [
                        {
                            backgroundColor: 'rgba(148,159,177,0.2)',
                            borderColor: 'rgba(148,159,177,1)',
                            pointBackgroundColor: 'rgba(148,159,177,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                        }
                    ];
                    this.lineChartLegend_month = true;
                    this.lineChartType_month = 'line';
                    this.lineChartData_days = [
                        { data: this.seriesCData, label: 'Incidents Day Wise' }
                    ];
                    this.lineChartLabels_days = this.seriesDData;
                    this.lineChartOptions_days = {
                        responsive: true
                    };
                    this.lineChartColors_days = [
                        {
                            backgroundColor: 'rgba(148,159,177,0.2)',
                            borderColor: 'rgba(148,159,177,1)',
                            pointBackgroundColor: 'rgba(148,159,177,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                        }
                    ];
                    this.lineChartLegend_days = true;
                    this.lineChartType_days = 'line';
                }
                ;
                MTEComponent.prototype.onSelectXDays = function (selectedValue) {
                    this.selectedXDays = selectedValue;
                };
                MTEComponent.prototype.onSelectYDays = function (selectedValue) {
                    this.selectedYDays = selectedValue;
                };
                MTEComponent.prototype.onSelectXMonth = function (selectedValue) {
                    this.selectedXMonth = selectedValue;
                };
                MTEComponent.prototype.onSelectYMonth = function (selectedValue) {
                    this.selectedYMonth = selectedValue;
                };
                MTEComponent.prototype.loadGraphForMonth = function () {
                    this.lineChartData_month = null;
                    this.lineChartLabels_month = null;
                    if (this.selectedXMonth == 'Month' && this.selectedYMonth == 'Data') {
                        for (var i = 0; i < this.excelDataSample_month.length; i++) {
                            this.seriesAData[i] = this.excelDataSample_month[i].Data;
                            this.seriesBData[i] = this.excelDataSample_month[i].Month;
                        }
                    }
                    else if (this.selectedXMonth == 'Data' && this.selectedYMonth == 'Month') {
                        for (var i = 0; i < this.excelDataSample_month.length; i++) {
                            this.seriesAData[i] = this.excelDataSample_month[i].Month;
                            this.seriesBData[i] = this.excelDataSample_month[i].Data;
                        }
                    }
                    this.lineChartData_month = [
                        { data: this.seriesAData, label: 'Incidents Month Wise' }
                    ];
                    this.lineChartLabels_month = this.seriesBData;
                };
                MTEComponent.prototype.loadGraphForDays = function () {
                    this.lineChartData_days = null;
                    this.lineChartLabels_days = null;
                    if (this.selectedXDays == 'Day' && this.selectedYDays == 'Data') {
                        for (var i = 0; i < this.excelDataSample_days.length; i++) {
                            this.seriesCData[i] = this.excelDataSample_days[i].Data;
                            this.seriesDData[i] = this.excelDataSample_days[i].Day;
                        }
                    }
                    else if (this.selectedXDays == 'Data' && this.selectedYDays == 'Day') {
                        for (var i = 0; i < this.excelDataSample_days.length; i++) {
                            this.seriesCData[i] = this.excelDataSample_days[i].Day;
                            this.seriesDData[i] = this.excelDataSample_days[i].Data;
                        }
                    }
                    this.lineChartData_days = [
                        { data: this.seriesCData, label: 'Incidents Day Wise' }
                    ];
                    this.lineChartLabels_days = this.seriesDData;
                };
                // fileChange(event) {
                //     let fileList: FileList = event.target.files;
                //     if(fileList.length > 0) {
                //         let file: File = fileList[0];
                //         let formData:FormData = new FormData();
                //         formData.append('uploadFile', file, file.name);
                //         let headers = new Headers();
                //         headers.append('Content-Type', 'multipart/form-data');
                //         headers.append('Accept', 'application/json');
                //         let options = new RequestOptions({ headers: headers });
                //         this.http.post(`${this.apiEndPoint}`, formData, options)
                //             .map(res => res.json())
                //             .catch(error => Observable.throw(error))
                //             .subscribe(
                //                 data => console.log('success'),
                //                 error => console.log(error)
                //             )
                //     }
                // }
                MTEComponent.prototype.formSubmit = function () {
                    //   if(this.data.loginId == "admin" && this.data.pwd == "admin"){
                    //     this._router.navigate(['admin']);
                    //   }
                    //   else{
                    //     this._router.navigate(['user']);
                    //   }
                    var url = "app/Demo_excel.xlsx";
                    var oReq = new XMLHttpRequest();
                    oReq.open("GET", url, true);
                    oReq.responseType = "arraybuffer";
                    oReq.onload = function (e) {
                        var arraybuffer = oReq.response;
                        /* convert data to binary string */
                        var data = new Uint8Array(arraybuffer);
                        var arr = new Array();
                        for (var i = 0; i != data.length; ++i)
                            arr[i] = String.fromCharCode(data[i]);
                        var bstr = arr.join("");
                        /* Call XLSX */
                        var workbook = XLSX.read(bstr, { type: "binary" });
                        var total_incidents_sheet = workbook.SheetNames[0];
                        var month_wise_sheet = workbook.SheetNames[1];
                        var day_wise_sheet = workbook.SheetNames[2];
                        var worksheet_incidents = workbook.Sheets[total_incidents_sheet];
                        var worksheet_months = workbook.Sheets[month_wise_sheet];
                        var worksheet_days = workbook.Sheets[day_wise_sheet];
                        var excelData_column_month = XLSX.utils.sheet_to_json(worksheet_months, { header: 1 });
                        var excelData_column_days = XLSX.utils.sheet_to_json(worksheet_days, { header: 1 });
                        localStorage.setItem('column_days', JSON.stringify(excelData_column_days));
                        localStorage.setItem('column_month', JSON.stringify(excelData_column_month));
                        var excelData = XLSX.utils.sheet_to_json(worksheet_incidents, { raw: true });
                        var excelData_month = XLSX.utils.sheet_to_json(worksheet_months, { raw: true });
                        var excelData_days = XLSX.utils.sheet_to_json(worksheet_days, { raw: true });
                        localStorage.setItem('excelData', JSON.stringify(excelData));
                        localStorage.setItem('excelData_month', JSON.stringify(excelData_month));
                        localStorage.setItem('excelData_days', JSON.stringify(excelData_days));
                    };
                    oReq.send();
                    this.excelDataSample = JSON.parse(localStorage.getItem('excelData'));
                    this.excelDataSample_month = JSON.parse(localStorage.getItem('excelData_month'));
                    this.excelDataSample_days = JSON.parse(localStorage.getItem('excelData_days'));
                    this.excelDataSample_days_column = JSON.parse(localStorage.getItem('column_days'));
                    this.excelDataSample_month_column = JSON.parse(localStorage.getItem('column_month'));
                    // for (var i = 0; i < this.excelDataSample_month.length; i++) {
                    //     this.seriesAData[i] = this.excelDataSample_month[i].Data;
                    //     this.seriesBData[i] = this.excelDataSample_month[i].Month;
                    // }
                    // for (var i = 0; i < this.excelDataSample_days.length; i++) {
                    //     this.seriesCData[i] = this.excelDataSample_days[i].Data;
                    //     this.seriesDData[i] = this.excelDataSample_days[i].Day;
                    // }
                    //console.log("PAIR " + i + ": " + this.excelDataSample_month_column[0]);
                    this.monthlyData = this.excelDataSample_month_column[0];
                    //console.log("this.monthlyData is : "+ this.monthlyData);
                    //this.seriesMonthData[] = this.monthlyData.split(',');
                    this.seriesMonthData[0] = "Month";
                    this.seriesMonthData[1] = "Data";
                    //console.log("PAIR " + i + ": " + this.excelDataSample_days_column[0]);
                    this.dailyData = this.excelDataSample_days_column[0];
                    //console.log("this.dailyData is : "+ this.dailyData);
                    //this.seriesDaysData[] = this.dailyData.split(',');
                    this.seriesDaysData[0] = "Day";
                    this.seriesDaysData[1] = "Data";
                };
                return MTEComponent;
            }());
            MTEComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "<h2>test</h2>\n\t<router-outlet></router-outlet>"
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], MTEComponent);
            exports_1("MTEComponent", MTEComponent);
        }
    };
});
//# sourceMappingURL=mte1.component.js.map