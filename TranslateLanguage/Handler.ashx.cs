using System.Text;
using System.Web;
using System.Web.SessionState;

public class Handler: IHttpHandler, IRequiresSessionState {
    public void ProcessRequest(HttpContext context) {
        context.Response.ContentType = "text/plain";

        StringBuilder html = new StringBuilder();

        html.Append(@"
            <div>
                systemName: <span data-translate='systemName'></span><br />
                login: <span data-translate='login'></span><br />
                select: <span data-translate='select'></span><br />
                notFound: <span data-translate='notFound'></span><br />
                tab1Title: <span data-translate='tab1Title'></span><br />
                tab2Title: <span data-translate='tab2Title'></span><br />
                tab3Title: <span data-translate='tab3Title'></span><br />
                appFormID: <span data-translate='appFormID'></span><br />
                typeofApp: <span data-translate='typeofApp'></span><br />
                reasonAppReject: <span data-translate='reasonAppReject'></span><br />
                appSubmit: <span data-translate='appSubmit'></span><br />
                approvProcess: <span data-translate='approvProcess'></span><br />
                fullName: <span data-translate='fullName'></span><br />
                studentID: <span data-translate='studentID'></span><br />
                studentID_FullName: <span data-translate='studentID_FullName'></span><br />
                semester: <span data-translate='semester'></span><br />
                appFormStatus: <span data-translate='appFormStatus'></span><br />
                faculty: <span data-translate='faculty'></span><br />
                program: <span data-translate='program'></span><br />
                displayAppForm: <span data-translate='displayAppForm'></span><br />
                searchByStudentID_FullName: <span data-translate='searchByStudentID_FullName'></span><br />
                displayResults: <span data-translate='displayResults'></span><br />
                order: <span data-translate='order'></span><br />
                yearLevel: <span data-translate='yearLevel'></span><br />
                searchByStudentID_FullName2: <span data-translate='searchByStudentID_FullName2'></span><br />
                selectAll: <span data-translate='selectAll'></span><br />
                cancelled_Request: <span data-translate='cancelled_Request'></span><br />
                pending: <span data-translate='pending'></span><br />
                approved: <span data-translate='approved'></span><br />
                noApproved: <span data-translate='noApproved'></span><br />
                tab2Table: <span data-translate='tab2Table'></span><br />
                open: <span data-translate='open'></span><br />
                cancel: <span data-translate='cancel'></span><br />
                reqFormStatus: <span data-translate='reqFormStatus'></span><br />
                facStaff: <span data-translate='reqFormStatus'></span><br />
                cem: <span data-translate='cem'></span>
            </div>
        ");

        context.Response.Write(html.ToString());
    }

    public bool IsReusable {
        get {
            return false;
        }
    }
}
