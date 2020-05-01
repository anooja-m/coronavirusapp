<template>
<div>
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-light white">

  <div class="container"> 

    <a class="navbar-brand" href="#">
      <img src="./assets/icon.jpeg" height="30" alt="mdb logo">
    </a>

    <!-- Collapse button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="basicExampleNav">

      <!-- Left -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">World</a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/" target="_blank">India</a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/react/" target="_blank">Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/vue/" target="_blank">News</a>
        </li>
      </ul>

      <!-- Right -->
      <ul class="navbar-nav nav-flex-icons">
        <li class="nav-item">
          <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li> 
        <li class="nav-item">
          <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link waves-effect"
             target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://mdbootstrap.com/docs/jquery/newsletter/"
             class="nav-link border border-light rounded waves-effect mr-2" target="_blank">
            <i class="fas fa-envelope mr-1"></i>Newsletter
          </a>
        </li>
      </ul>

    </div>

  </div>

</nav>
<!--/.Navbar-->
  <div class="container my-5 py-5 z-depth-1">

 
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

          <img src="./assets/covid.jpg" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-6 mb-4 mb-lg-0">

          <h3 class="font-weight-bold">COVID-19 Latest Updates</h3>

          <p class="font-weight-bold">Stay Home, Stay Safe</p>

          <p class="text-muted">Coronavirus world tracker: Total number of coronavirus cases in India has reached {{countryData.countries_stat[15].active_cases}}, and the global tally stands at {{worldData.active_cases}}. Stay with Fawzlabs News for Covid-19 corona LIVE updates</p>

          <a class="font-weight-bold" href="#" >Learn more<i class="fas fa-angle-right ml-2"></i></a>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->


  </div>
  <!-- Basic dropdown -->
        


  <div class="container">
  <div class="row">
    <div class="col-md-8">
    
      <div class="row">
       
  <div class="container my-5">


  <!--Section: Content-->
  <section class="">

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold mb-5">When and how to wear medical masks to protect against coronavirus?</h3>

  	<div class="row">

      <!--Grid column-->
      <div class="col-md-6 mb-4">
        <!--Card-->
        <div class="card">

          <!--Card image-->
          <div class="view overlay">
            <img src="./assets/masks-1.png" class="card-img-top" alt="">
            <a>
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!--/.Card image-->

        </div>
        <!--/.Card-->

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-6 mb-4">

        <!--Card-->
        <div class="card">

          <!--Card image-->
          <div class="view overlay">
            <img src="./assets/masks-2.png" class="card-img-top" alt="">
            <a>
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!--/.Card image-->

          
        </div>
        <!--/.Card-->
      </div>
      <!--Grid column-->

    </div>
    

  </section>
  <!--Section: Content-->


</div>
<div class="container ">


  <!--Section: Content-->
  <section class="">

  	<div class="row">

      <!--Grid column-->
      <div class="col-md-6 mb-4">
        <!--Card-->
        <div class="card">

          <!--Card image-->
          <div class="view overlay">
            <img src="./assets/masks-3.png" class="card-img-top" alt="">
            <a>
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!--/.Card image-->

        </div>
        <!--/.Card-->

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-6 mb-4">

        <!--Card-->
        <div class="card">

          <!--Card image-->
          <div class="view overlay">
            <img src="./assets/masks-4.png" class="card-img-top" alt="">
            <a>
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!--/.Card image-->

        </div>
        <!--/.Card-->
      </div>
      <!--Grid column-->

    </div>

  </section>
  <!--Section: Content-->


</div>
      </div>
    </div>
    <div class="col-md-4"><div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Active Cases</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.active_cases}}</h5>
  </div>
</div>
<div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
  <div class="card-header">Deaths per 1m population</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.deaths_per_1m_population}}</h5>
    
  </div>
</div>
<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
  <div class="card-header">Total recovered</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.total_recovered}}</h5>
    
  </div>
</div>
<div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
  <div class="card-header">Total deaths</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.total_deaths}}</h5>
    
  </div>
</div>

<div class="card text-white bg-info mb-3" style="max-width: 20rem;">
  <div class="card-header">New cases</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.new_cases}}</h5>
  
  </div>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Total cases</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.total_cases}}</h5>
   
  </div>
</div>
<div class="card text-white bg-dark" style="max-width: 20rem;">
  <div class="card-header">New deaths</div>
  <div class="card-body">
    <h5 class="card-title">{{worldData.new_deaths}}</h5>
   
  </div>
</div>
<p class="text-muted">Statistic taken at : {{worldData.statistic_taken_at}}</p>

</div>
  </div></div>
<div class="container my-5 py-5">

  
  <!--Section: Content-->
  <section class="text-center px-md-5 mx-md-5 dark-grey-text">
    
    <div class="row mb-5">
      <div class="col-md-4 mx-auto">
        <div class="view mb-4 pb-2">
          <img src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid" alt="smaple image">
        </div>
      </div>
    </div>

    <h3 class="font-weight-bold mb-4 pb-2"><div style="margin-bottom:30px; margin-left: 5%">
      <a style="text-decoration: underline;" href="#">Report coronavirus cases</a>
      </div></h3>
 
  </section>
  <!--Section: Content-->

  
</div>

<section id="table">
<mdb-datatable responsive
    :data="tableData"
    striped
    bordered
  />
</section>
</div>
</template>
<style>
#table{
  margin-left: 4%;
  margin-right: 4%;
}
</style>
<script>
 import { mdbDatatable } from 'mdbvue';
export default {
   name: 'DatatablePage',
    components: {
      mdbDatatable
    },
 data(){
    return{
    indiaData:[]
    ,worldData:[]
    ,countryData:[]
 ,tableData: {
          columns: [
            {
              label: 'Country',
              field: 'country_name',
              sort: 'asc'
            },
            {
              label: 'Active Cases',
              field: 'active_cases',
              sort: 'asc'
            },
            {
              label: 'Total recovered',
              field: 'total_recovered',
              sort: 'asc'
            },
             {
              label: 'Total deaths',
              field: 'deaths',
              sort: 'asc'
            },
             {
              label: 'Total cases',
              field: 'cases',
              sort: 'asc'
            },
             {
              label: 'New cases',
              field: 'new_cases',
              sort: 'asc'
            },
             {
              label: 'New deaths',
              field: 'new_deaths',
              sort: 'asc'
            },
             {
              label: 'Deaths per 1m population',
              field: 'deaths_per_1m_population',
              sort: 'asc'
            },
            {
              label: 'Total cases per 1m population',
              field: 'total_cases_per_1m_population',
              sort: 'asc'
            },
            {
              label: 'Total Tests',
              field: 'total_tests',
              sort: 'asc'
            },
            {
              label: 'Serious Critical',
              field: 'serious_critical',
              sort: 'asc'
            },
            ],
        
          rows:[],
        
           
 }
  ,tableRow: 
            {
              
              country_name:'',
              active_cases:'',
              total_recovered:'',
              deaths:'',
              cases:'',
              new_cases:'',
              new_deaths:'',
              deaths_per_1m_population:'',
              total_cases_per_1m_population:'',
              total_tests:'',
              serious_critical:''
              
              
            }   
    }
  }
  ,mounted(){
    
    this.getworld()
    this.getcountry()
  }
  ,methods:{ 
    getworld(){
   
            let config = {
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "52756d3688mshb38d3516e8cecfep1b8c80jsnfb829a645da3"
        }
      }
      axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',config).then(response=>{
          this.worldData=response.data;
        
      })
   },
   getcountry(){
   
            let config = {
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "52756d3688mshb38d3516e8cecfep1b8c80jsnfb829a645da3"
        }
      }
      axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',config).then(response=>{
          this.countryData=response.data;
        for (var i=1;i<this.countryData.countries_stat.length;i++){

this.tableRow.country_name= this.countryData.countries_stat[i].country_name,
this.tableRow.active_cases= this.countryData.countries_stat[i].active_cases,
this.tableRow.total_recovered= this.countryData.countries_stat[i].total_recovered,
this.tableRow.deaths= this.countryData.countries_stat[i].deaths,
this.tableRow.cases= this.countryData.countries_stat[i].cases,
this.tableRow.new_cases= this.countryData.countries_stat[i].new_cases,
this.tableRow.new_deaths= this.countryData.countries_stat[i].new_deaths,
this.tableRow.deaths_per_1m_population= this.countryData.countries_stat[i].deaths_per_1m_population,
this.tableRow.total_cases_per_1m_population= this.countryData.countries_stat[i].total_cases_per_1m_population,
this.tableRow.total_tests= this.countryData.countries_stat[i].total_tests,
this.tableRow.serious_critical= this.countryData.countries_stat[i].serious_critical,
this.tableData.rows.push(JSON.parse(JSON.stringify(this.tableRow)))
this.tableRow.country_name=' '

this.tableRow.active_cases=' '
this.tableRow.total_recovered=' '
this.tableRow.deaths=' '
this.tableRow.cases=' '
this.tableRow.new_cases=' '
this.tableRow.new_deaths=' '
this.tableRow.deaths_per_1m_population=' '
this.tableRow.total_cases_per_1m_population=' '
this.tableRow.total_tests=' '
this.tableRow.serious_critical=' '



if (this.countryData.countries_stat[i].country=='India'){
this.indiaData = this.countryData.countries_stat[i]
}
}
      })
    
      
   },
  }
  
};
</script>