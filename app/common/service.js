/*10.120.16.135:8080  log.aisino.com:8887*/
var Service = {
  host:'http://log.aisino.com:8887/aosapp/pt/service?pt_charset=utf-8&formid=',
  login: 'pt_aosapp_service_login',
  sprintlist: 'pt_aosapp_service_sprintlist',
  backloglist: 'pt_aosapp_service_activbacklog',
  teamlist: 'pt_aosapp_service_queryteam',
  backloglistbysp: 'pt_aosapp_service_backlogbysp',
  backloglistbypv: 'pt_aosapp_service_backlogbypr',
  projectlist: 'dev_project_list',
  versionlist: 'dev_release_list',
  modulelist: 'dev_module_list',
  burndown: 'pt_aosapp_service_releasegraph',
};

module.exports = Service;