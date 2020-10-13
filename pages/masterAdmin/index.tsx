import Head from "next/head"
import { Helmet } from "react-helmet"

const Index = () => {
	return (
		<div>

			<Head>

				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="" />
				<meta name="author" content="" />

				<title>SB Admin 2 - Tables</title>

				{/* <!-- Custom fonts for this template --> */}
				<link href="adminAssets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
				<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

				{/* <!-- Custom styles for this template --> */}
				<link href="adminAssets/css/sb-admin-2.min.css" rel="stylesheet" />

				{/* <!-- Custom styles for this page --> */}
				<link href="adminAssets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" />

				<script src="adminAssets/vendor/jquery/jquery.min.js"></script>
				<script src="adminAssets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
				<script src="adminAssets/vendor/datatables/dataTables.bootstrap4.min.js"></script>
				{/* <!-- Core plugin JavaScript--> */}
				<script src="adminAssets/vendor/jquery-easing/jquery.easing.min.js"></script>

				{/* <!-- Custom scripts for all pages--> */}
				<script src="adminAssets/js/sb-admin-2.min.js"></script>

				{/* <!-- Page level plugins --> */}
				<script src="adminAssets/vendor/datatables/jquery.dataTables.min.js"></script>

				{/* <!-- Page level custom scripts --> */}
				<script src="adminAssets/js/demo/datatables-demo.js"></script>

			</Head>

			<body id="page-top">

				{/* <!-- Page Wrapper --> */}
				<div id="wrapper">

					{/* <!-- Sidebar --> */}
					<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

						{/* <!-- Sidebar - Brand --> */}
						<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
							<div className="sidebar-brand-icon rotate-n-15">
								<i className="fas fa-laugh-wink"></i>
							</div>
							<div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
						</a>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider my-0" />

						{/* <!-- Nav Item - Dashboard --> */}
						<li className="nav-item">
							<a className="nav-link" href="index.html">
								<i className="fas fa-fw fa-tachometer-alt"></i>
								<span>Dashboard</span></a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}
						<div className="sidebar-heading">
							Interface
      </div>

						{/* <!-- Nav Item - Pages Collapse Menu --> */}
						<li className="nav-item">
							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
								<i className="fas fa-fw fa-cog"></i>
								<span>Components</span>
							</a>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Custom Components:</h6>
									<a className="collapse-item" href="buttons.html">Buttons</a>
									<a className="collapse-item" href="cards.html">Cards</a>
								</div>
							</div>
						</li>

						{/* <!-- Nav Item - Utilities Collapse Menu --> */}
						<li className="nav-item">
							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
								<i className="fas fa-fw fa-wrench"></i>
								<span>Utilities</span>
							</a>
							<div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Custom Utilities:</h6>
									<a className="collapse-item" href="utilities-color.html">Colors</a>
									<a className="collapse-item" href="utilities-border.html">Borders</a>
									<a className="collapse-item" href="utilities-animation.html">Animations</a>
									<a className="collapse-item" href="utilities-other.html">Other</a>
								</div>
							</div>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}
						<div className="sidebar-heading">
							Addons
      </div>

						{/* <!-- Nav Item - Pages Collapse Menu --> */}
						<li className="nav-item">
							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
								<i className="fas fa-fw fa-folder"></i>
								<span>Pages</span>
							</a>
							<div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Login Screens:</h6>
									<a className="collapse-item" href="login.html">Login</a>
									<a className="collapse-item" href="register.html">Register</a>
									<a className="collapse-item" href="forgot-password.html">Forgot Password</a>
									<div className="collapse-divider"></div>
									<h6 className="collapse-header">Other Pages:</h6>
									<a className="collapse-item" href="404.html">404 Page</a>
									<a className="collapse-item" href="blank.html">Blank Page</a>
								</div>
							</div>
						</li>

						{/* <!-- Nav Item - Charts --> */}
						<li className="nav-item">
							<a className="nav-link" href="charts.html">
								<i className="fas fa-fw fa-chart-area"></i>
								<span>Charts</span></a>
						</li>

						{/* <!-- Nav Item - Tables --> */}
						<li className="nav-item active">
							<a className="nav-link" href="tables.html">
								<i className="fas fa-fw fa-table"></i>
								<span>Tables</span></a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider d-none d-md-block" />

						{/* <!-- Sidebar Toggler (Sidebar) --> */}
						<div className="text-center d-none d-md-inline">
							<button className="rounded-circle border-0" id="sidebarToggle"></button>
						</div>

					</ul>
					{/* <!-- End of Sidebar --> */}

					{/* <!-- Content Wrapper --> */}
					<div id="content-wrapper" className="d-flex flex-column">

						{/* <!-- Main Content --> */}
						<div id="content">

							{/* <!-- Topbar --> */}
							<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

								{/* <!-- Sidebar Toggle (Topbar) --> */}
								<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
									<i className="fa fa-bars"></i>
								</button>

								{/* <!-- Topbar Search --> */}
								<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
									<div className="input-group">
										<input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
										<div className="input-group-append">
											<button className="btn btn-primary" type="button">
												<i className="fas fa-search fa-sm"></i>
											</button>
										</div>
									</div>
								</form>

								{/* <!-- Topbar Navbar --> */}
								<ul className="navbar-nav ml-auto">

									{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
									<li className="nav-item dropdown no-arrow d-sm-none">
										<a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fas fa-search fa-fw"></i>
										</a>
										{/* <!-- Dropdown - Messages --> */}
										<div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
											<form className="form-inline mr-auto w-100 navbar-search">
												<div className="input-group">
													<input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
													<div className="input-group-append">
														<button className="btn btn-primary" type="button">
															<i className="fas fa-search fa-sm"></i>
														</button>
													</div>
												</div>
											</form>
										</div>
									</li>

									{/* <!-- Nav Item - Alerts --> */}
									<li className="nav-item dropdown no-arrow mx-1">
										<a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fas fa-bell fa-fw"></i>
											{/* <!-- Counter - Alerts --> */}
											<span className="badge badge-danger badge-counter">3+</span>
										</a>
										{/* <!-- Dropdown - Alerts --> */}
										<div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
											<h6 className="dropdown-header">
												Alerts Center
                </h6>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="mr-3">
													<div className="icon-circle bg-primary">
														<i className="fas fa-file-alt text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">December 12, 2019</div>
													<span className="font-weight-bold">A new monthly report is ready to download!</span>
												</div>
											</a>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="mr-3">
													<div className="icon-circle bg-success">
														<i className="fas fa-donate text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
											</a>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="mr-3">
													<div className="icon-circle bg-warning">
														<i className="fas fa-exclamation-triangle text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
											</a>
											<a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
										</div>
									</li>

									{/* <!-- Nav Item - Messages --> */}
									<li className="nav-item dropdown no-arrow mx-1">
										<a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fas fa-envelope fa-fw"></i>
											{/* <!-- Counter - Messages --> */}
											<span className="badge badge-danger badge-counter">7</span>
										</a>
										{/* <!-- Dropdown - Messages --> */}
										<div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
											<h6 className="dropdown-header">
												Message Center
                </h6>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="dropdown-list-image mr-3">
													<img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
													<div className="status-indicator bg-success"></div>
												</div>
												<div className="font-weight-bold">
													<div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
													<div className="small text-gray-500">Emily Fowler · 58m</div>
												</div>
											</a>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="dropdown-list-image mr-3">
													<img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
													<div className="status-indicator"></div>
												</div>
												<div>
													<div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
													<div className="small text-gray-500">Jae Chun · 1d</div>
												</div>
											</a>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="dropdown-list-image mr-3">
													<img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
													<div className="status-indicator bg-warning"></div>
												</div>
												<div>
													<div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
													<div className="small text-gray-500">Morgan Alvarez · 2d</div>
												</div>
											</a>
											<a className="dropdown-item d-flex align-items-center" href="#">
												<div className="dropdown-list-image mr-3">
													<img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
													<div className="status-indicator bg-success"></div>
												</div>
												<div>
													<div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
													<div className="small text-gray-500">Chicken the Dog · 2w</div>
												</div>
											</a>
											<a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
										</div>
									</li>

									<div className="topbar-divider d-none d-sm-block"></div>

									{/* <!-- Nav Item - User Information --> */}
									<li className="nav-item dropdown no-arrow">
										<a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
											<img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
										</a>
										{/* <!-- Dropdown - User Information --> */}
										<div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
											<a className="dropdown-item" href="#">
												<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
											<a className="dropdown-item" href="#">
												<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
											<a className="dropdown-item" href="#">
												<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
												<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
										</div>
									</li>

								</ul>

							</nav>
							{/* <!-- End of Topbar --> */}

							{/* <!-- Begin Page Content --> */}
							<div className="container-fluid">

								{/* <!-- Page Heading --> */}
								<h1 className="h3 mb-2 text-gray-800">Tables</h1>
								<p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
		  information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

								{/* <!-- DataTales Example --> */}
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
												<thead>
													<tr>
														<th>Name</th>
														<th>Position</th>
														<th>Office</th>
														<th>Age</th>
														<th>Start date</th>
														<th>Salary</th>
													</tr>
												</thead>
												<tfoot>
													<tr>
														<th>Name</th>
														<th>Position</th>
														<th>Office</th>
														<th>Age</th>
														<th>Start date</th>
														<th>Salary</th>
													</tr>
												</tfoot>
												<tbody>
													<tr>
														<td>Brenden Wagner</td>
														<td>Software Engineer</td>
														<td>San Francisco</td>
														<td>28</td>
														<td>2011/06/07</td>
														<td>$206,850</td>
													</tr>
													<tr>
														<td>Fiona Green</td>
														<td>Chief Operating Officer (COO)</td>
														<td>San Francisco</td>
														<td>48</td>
														<td>2010/03/11</td>
														<td>$850,000</td>
													</tr>
													<tr>
														<td>Shou Itou</td>
														<td>Regional Marketing</td>
														<td>Tokyo</td>
														<td>20</td>
														<td>2011/08/14</td>
														<td>$163,000</td>
													</tr>
													<tr>
														<td>Michelle House</td>
														<td>Integration Specialist</td>
														<td>Sidney</td>
														<td>37</td>
														<td>2011/06/02</td>
														<td>$95,400</td>
													</tr>
													<tr>
														<td>Suki Burks</td>
														<td>Developer</td>
														<td>London</td>
														<td>53</td>
														<td>2009/10/22</td>
														<td>$114,500</td>
													</tr>
													<tr>
														<td>Prescott Bartlett</td>
														<td>Technical Author</td>
														<td>London</td>
														<td>27</td>
														<td>2011/05/07</td>
														<td>$145,000</td>
													</tr>
													<tr>
														<td>Gavin Cortez</td>
														<td>Team Leader</td>
														<td>San Francisco</td>
														<td>22</td>
														<td>2008/10/26</td>
														<td>$235,500</td>
													</tr>
													<tr>
														<td>Martena Mccray</td>
														<td>Post-Sales support</td>
														<td>Edinburgh</td>
														<td>46</td>
														<td>2011/03/09</td>
														<td>$324,050</td>
													</tr>
													<tr>
														<td>Unity Butler</td>
														<td>Marketing Designer</td>
														<td>San Francisco</td>
														<td>47</td>
														<td>2009/12/09</td>
														<td>$85,675</td>
													</tr>
													<tr>
														<td>Howard Hatfield</td>
														<td>Office Manager</td>
														<td>San Francisco</td>
														<td>51</td>
														<td>2008/12/16</td>
														<td>$164,500</td>
													</tr>
													<tr>
														<td>Hope Fuentes</td>
														<td>Secretary</td>
														<td>San Francisco</td>
														<td>41</td>
														<td>2010/02/12</td>
														<td>$109,850</td>
													</tr>
													<tr>
														<td>Vivian Harrell</td>
														<td>Financial Controller</td>
														<td>San Francisco</td>
														<td>62</td>
														<td>2009/02/14</td>
														<td>$452,500</td>
													</tr>
													<tr>
														<td>Timothy Mooney</td>
														<td>Office Manager</td>
														<td>London</td>
														<td>37</td>
														<td>2008/12/11</td>
														<td>$136,200</td>
													</tr>
													<tr>
														<td>Jackson Bradshaw</td>
														<td>Director</td>
														<td>New York</td>
														<td>65</td>
														<td>2008/09/26</td>
														<td>$645,750</td>
													</tr>
													<tr>
														<td>Olivia Liang</td>
														<td>Support Engineer</td>
														<td>Singapore</td>
														<td>64</td>
														<td>2011/02/03</td>
														<td>$234,500</td>
													</tr>

													<tr>
														<td>Lael Greer</td>
														<td>Systems Administrator</td>
														<td>London</td>
														<td>21</td>
														<td>2009/02/27</td>
														<td>$103,500</td>
													</tr>
													<tr>
														<td>Jonas Alexander</td>
														<td>Developer</td>
														<td>San Francisco</td>
														<td>30</td>
														<td>2010/07/14</td>
														<td>$86,500</td>
													</tr>
													<tr>
														<td>Shad Decker</td>
														<td>Regional Director</td>
														<td>Edinburgh</td>
														<td>51</td>
														<td>2008/11/13</td>
														<td>$183,000</td>
													</tr>
													<tr>
														<td>Michael Bruce</td>
														<td>Javascript Developer</td>
														<td>Singapore</td>
														<td>29</td>
														<td>2011/06/27</td>
														<td>$183,000</td>
													</tr>
													<tr>
														<td>Donna Snider</td>
														<td>Customer Support</td>
														<td>New York</td>
														<td>27</td>
														<td>2011/01/25</td>
														<td>$112,000</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>

							</div>
							{/* <!-- /.container-fluid --> */}

						</div>
						{/* <!-- End of Main Content --> */}

						{/* <!-- Footer --> */}
						<footer className="sticky-footer bg-white">
							<div className="container my-auto">
								<div className="copyright text-center my-auto">
									<span>Copyright &copy; Your Website 2019</span>
								</div>
							</div>
						</footer>
						{/* <!-- End of Footer --> */}

					</div>
					{/* <!-- End of Content Wrapper --> */}

				</div>
				{/* <!-- End of Page Wrapper --> */}

				{/* <!-- Scroll to Top Button--> */}
				<a className="scroll-to-top rounded" href="#page-top">
					<i className="fas fa-angle-up"></i>
				</a>

				{/* <!-- Logout Modal--> */}
				<div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
								<button className="close" type="button" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
							<div className="modal-footer">
								<button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
								<a className="btn btn-primary" href="login.html">Logout</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Bootstrap core JavaScript--> */}
				{/* <Helmet>
					
				</Helmet> */}
			</body>
		</div>
	)
}

export default Index