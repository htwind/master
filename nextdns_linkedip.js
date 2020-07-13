//Nextdns_linkedip = type=event,event-name=network-changed
//Script event auto linked ipv4 nextdns: network-change

async function launch() {
    await linkedip();
    $done();
}
launch()
function linkedip(){ 
$httpClient.post('https://link-ip.nextdns.io/f45755/7fbc626456b2d68e', function(error, response, data){
  if (error) {
console.log('❌');
  } else {
console.log('🔔'+ data);
  }
});
}
