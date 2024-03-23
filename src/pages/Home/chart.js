function Chart() {
    return (
        <section className="section">
            <div className="section-header">
                <h1>Chart.JS</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Modules</a>
                    </div>
                    <div className="breadcrumb-item">Chart.js</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Chart.js</h2>
                <p className="section-lead">
                    We use 'Chart.JS' made by @chartjs. You can check the full documentation{' '}
                    <a href="http://www.chartjs.org/">here</a>.
                </p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Line Chart</h4>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Bar Chart</h4>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Doughnut Chart</h4>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Pie Chart</h4>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chart;
