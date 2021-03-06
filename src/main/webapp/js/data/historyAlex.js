workHistory = {"workHistory": [
    {
        "company": "ANZ Banking Group",
        "start" : "April 2012",
        "finish" : "current",
        "position" : "Senior Java Developer",
        "projects" : [
            {
                "name": "Global Markets Portal",
                "start": "April 2012",
                "finish": "current",
                "summary":
                    "<p>The Global Markets Portal is a platform for both ANZ clients and internal ANZ dealers to perform their daily foreign currency trading activities. Clients can perform FX payments and manage related payment data, " +
                        "with minimal manual intervention from ANZ personnel.</p>" +
                        "<p>Some of the functionalities provided by GMP:</p>" +
                        "<ul>"+
                        "<li>Beneficiary management</li>"+
                        "<li>Creating FX Payments</li>"+
                        "<li>Creating Foreign Exchange Contract (FEC) and managing them (such as extension / pre-deliver)</li>"+
                        "<li>Viewing payment history</li>"+
                        "</ul>"+
                        "<p>Behind the scene, GMP uses TrAPI (from Reuters) as the pricing engine. It also integrates with ANZ's settlement system that is responsible to do the backend reconciliation.</p>" +
                        "<p>The main components of GMP are the web client and the web services backend. The web client is a Single Page Application written purely in HTML and Javascript. It then uses AJAX to communicate with the RESTful web services backend."
            }

        ]
    },
    {
        "company": "CGU Insurance Australia",
        "start" : "August 2011",
        "finish" : "April 2012",
        "position" : "Senior Java Developer",
        "projects" : [
            {
                "name" :"Apollo Document Management System",
                "start" : "August 2011",
                "finish": "April 2012",
                "summary":

                    "<p>The Apollo Document Management System is an ongoing project with the goal of providing an effective and efficient solution for CGU to manage its documents. These documents are previously stored in hardcopy form, which in itself requires a lot of manual work to maintain.</p>"+
                        "<p>The project is made up of three components:</p>"+
                        "<ol>"+
                        "<li><em>Inbound</em>: processes incoming documents via email/fax/scanner into long term preservation format (PDF), and produces their corresponding metadata for processing by the repository module.</li>"+
                        "<li><em>Repository</em>: stores the documents along with their metadata, and provides interface for searching the documents.</li>"+
                        "<li><em>Outbound</em>: send correspondence documents to third party, as well as archiving the correspondence documents back in repository.</li>"+
                        "</ol>"+
                        "<p>Document Management System is implemented in both Java and .NET. The inbound module is implemented in .NET, while the repository and outbound modules are implemented in Java.</p>"
            }
        ]
    },
    {

        "company": "Sensis Pty Ltd",
        "start" : "October 2010",
        "finish" : "August 2011",
        "position" : "Senior Java Developer",
        "projects" : [
            {
                "name" :"Online Reporting Platform",
                "start" : "October 2010",
                "finish": "August 2011",
                "summary":
                    "<p>Online Reporting Platform is started with the vision of providing ROI reports for Sensis' clients. The system consumes data feed from the several sources, such as as Sensis' Yellow Online as well as other integration partners.</p>"+
                        "<p>Online Reporting Platform is implemented in a mixture of technologies. The data capture module is implemented in Java/J2EE, while the data processing is implemented in Ruby on Rails.</p>"
            }
        ]
    },
    {

        "company": "Toyota Motor Corporation Australia",
        "start" : "May 2005",
        "finish" : "October 2010",
        "position" : "Senior Java Developer",
        "projects" : [
            {
                "name" :"Taipan & IBus Enhancement",
                "start" : "June 2009",
                "finish": "October 2010",
                "summary":
                    "<p>Taipan is a system built to replace Toyota's existing parts ordering system. It integrates with SAP, <abbr title='Toyota Motor Corporation'>TMC</abbr>'s GTOPAS, as well as existing dealer and supplier systems through web services. Some of the system functionalities are:.</p>"+
                        "<ul>" +
                        "<li>For dealer to order service parts, both through web interface and web services invocation.</li>"+
                        "<li>Sending purchase order to supplier, through web services invocation.</li>"+
                        "<li>For supplier to notify advanced shipping notice.</li>"+
                        "<li><em>Event-based</em> architecture for processing files from GTOPAS.</li>"+
                        "</ul>"+
                        "<p>The project also adds a few enhancements to Toyota's home-grown <abbr title='Enterprise Service Bus'>ESB</abbr> (IBus) system, to name a few:</p>"+
                        "<ul>"+
                        "<li>Support SOAP with attachment.</li>"+
                        "<li>Support routing to FTP endpoints.</li>"+
                        "<li>Receive incoming FTP connection.</li>"+
                        "<li>Invoke remote windows command through WMI protocol.</li>"+
                        "</li>"
            },
            {
                "name" :"Network Central",
                "start" : "November 2008",
                "finish": "June 2009",
                "summary":
                    "<p>Network Central is a system to serve as a central repository for dealers and their staff information. Prior to the project, "+
                        "this information is stored across Lotus Notes Database, SAP and LDAP without any data synchronization process. The system also performs "+
                        "additional functions, such as report generation and scheduling dealer activation / deactivation.</p>"
            },
            {
                "name" :"Accessory Fitting Instruction (AFI)",
                "start" : "August 2008",
                "finish": "October 2008",
                "summary":
                    "<p>AFI is a system which allows dealer users to retrieve accessory fitting instruction from SmarTeam - a central document repository. "+
                        "It also allows Toyota internal users to generate usage report of the application. Prior to this project, dealer users had to call "+
                        "Toyota to obtain a hardcopy of these documents, a manual process which might introduce delay to the business activity.</p>"
            },
            {
                "name" :"Sarbane Oxley (SOX) Database Management",
                "start" : "December 2007",
                "finish": "June 2008",
                "summary":
                    "<p>SOX Database Management is a stand-alone, thick client application to help SOX compliance team and auditors to manage SOX "+
                        "documentation, processing and reporting. The client is built using Java Swing, which in turn communicates to the web service "+
                        "backend back-end that is deployed to Weblogic application server.</p>"
            },
            {
                "name" :"Kanban Printing System (KPS)",
                "start" : "August 2006",
                "finish": "December 2006",
                "summary":
                    "<p>The KPS web-application allows TMCA supplier to view parts order and download them in PDF format. The system receives the parts "+
                        "order data from eKanban system and stores them in the local database. Another part of the system generates the <em>daily-run</em> "+
                        "checklist for the truck driver for picking up the parts from the suppliers.</p>"
            },
            {
                "name" :"Toyota Vehicle Order Processing System (TVOPS)",
                "start" : "June 2006",
                "finish": "August 2006",
                "summary":
                    "<p>TVOPS is a web application to allow stock controller in the dealers to order vehicle from Toyota. The client is written as a "+
                        "thin web application which then integrates with SAP through the ESB system. User of the application can also view the order as a "+
                        "spreadsheet file which is generated from the data returned from SAP.</p>"
            },
            {
                "name" :"Customer Order Web Tracking (COWT)",
                "start" : "May 2005",
                "finish": "June 2005",
                "summary":
                    "<p>COWT is a web application to allow retail, fleet, and company fleet customers to view the status of their vehicle order. "+
                        "It is a lightweight web application, which performs SAP query through an ESB to get the vehicle details. COWT also performs LDAP "+
                        "query to obtain the details of the salesperson that the customers can contact to enquire more about their vehicle orders.</p>"
            }

        ]
    }
]}
