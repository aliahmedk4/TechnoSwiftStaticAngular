export const environment = {
  Timeout:60000,
  LandingPageSize:15,
  // LIVE
  // APIBaseURL:'https://salesbookapi.technoswiftsolution.com/api/',
  // API_URL: 'https://salesbookapi.technoswiftsolution.com/',

  // UAT
  APIBaseURL:'https://salebookuatapi.technoswiftsolution.com/api/',
  API_URL: 'https://salebookuatapi.technoswiftsolution.com/',

  // LOCAL
  //  APIBaseURL:'http://localhost:59320/api/',
  //  API_URL: 'http://localhost:59320/',

  EmailLogDescription:'Customer Reaching from Technoswift Site',
  From:'ali.tech1108@gmail.com',
  To:'ali.tech1108@gmail.com',
  EmailType:4

};

// ng build --configuration=uat for building with the UAT configuration.
// ng serve --configuration=uat for serving with the UAT configuration.