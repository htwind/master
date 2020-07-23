//Nextdns_linkedip = type=event,event-name=network-changed
//Script event auto linked ipv4 nextdns: network-change

async function launch() {
    await linkedip();
    $done();
}
launch()
function linkedip(){ 
$httpClient.post('https://link-ip.nextdns.io/917732/0d07e3ee026a20ba', function(error, response, data){
  if (error) {
console.log('❌');
  } else {
console.log('🔔'+ data);
  }
});
}
