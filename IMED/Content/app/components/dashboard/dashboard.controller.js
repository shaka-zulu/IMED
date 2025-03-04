import chartConfig from "./chartConfig";

class DashboardController{
    constructor() {
        this.searchText = '';
        this.filterState = 'COLLAPSED';
        this.showNewBusiness = true;
        this.showPayroll = true;
        this.showClaims = true;

        this.newBusinessSummary = {
            quotesIssued: 4,
            launching: 11,
            installing: 5,
            payrollTracking: 2
        }

        this.payrollSummary = {
            submitted: 2,
            notsubmitted: 4,
            payrollOverdue: 1
        }

        this.claimsSummary = {
            draft: 4,
            processing: 5,
            paid: 1
        }
    }

    toggleFilterState() {
        this.filterState = this.filterState === 'EXPANDED' ?
            'COLLAPSED' :
            'EXPANDED';
    }
}

export default DashboardController;