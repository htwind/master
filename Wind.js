[General]
loglevel = notify
bypass-system = true
bypass-tun = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12,127.0.0.0/24
timeout = 5
test-timeout = 5
shared-jsvm-context = true
show-error-page-for-reject = true
network-framework = false
proxy-test-url = http://www.google.com/generate_204
internet-test-url = http://www.google.com/generate_204
skip-proxy = 127.0.0.1,  192.168.0.0/16, 192.168.1.0/16, 10.0.0.0/8, ::ffff:0.0.0.0/1, ::ffff:128.0.0.0/1, localhost, *.local, e.crashlytics.com, captive.apple.com,*ess.apple.com,
always-real-ip = *.nextdns.io,
tls-provider = openssl
tls = 13
ipv6 = false
external-controller-access = wind@0.0.0.0:6170
allow-wifi-access = true
http-listen = 0.0.0.0:6152
socks5-listen = 0.0.0.0:6153
wifi-access-http-port = 6152
wifi-access-socks5-port = 6153
use-default-policy-if-wifi-not-primary = true
dns-server = 8.8.8.8, 8.8.4.4, 1.1.1.1, 1.0.0.1
doh-server = https://dns.nextdns.io/f45755/Wind
doh-follow-outbound-mode = false
doh-format = wireformat
wifi-assist = true
hijack-dns = 8.8.8.8:53, 8.8.4.4:53
tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
tun-included-routes = 192.168.1.12/32

[Replica]
hide-apple-request = 0
hide-crashlytics-request = 1
hide-crash-reporter-request = 1
hide-udp = 1
use-keyword-filter = false
keyword-filter-type = blacklist
keyword-filter = icloud,ocsp,logs,analytic,ads,iad,adthor,applovin,appnext,talk,dropbox,spys,branch,nexdns,.log,log.,measurement,lightricks,gmail.com,duckduckgo,nextdns,github,facebook,mzstatic,nordvpn,zalo,

[Proxy]
🟢 Wi-Fi = direct, interface=en0, allow-other-interface=true
🔵 Cellular(2G/3G/LTE) = direct, interface=pdp_ip0, allow-other-interface=true

[Proxy Group]
FINAL = ssid, default = WI-FI, cellular = CELLULAR
WI-FI = select, 🟢 Wi-Fi, PROXY
CELLULAR = select, 🔵 Cellular(2G/3G/LTE), PROXY
PROXY = select, policy-path=https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt, update-interval=21600, timeout=0, interval=0, tolerance=0
MEDIA = select, FINAL, PROXY
Facebook = select, FINAL, PROXY
SPEEDTEST = select, FINAL, PROXY
TikTok = select, FINAL, PROXY
ADS = select, policy-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/servers/Ads.list, update-interval=-1

[Rule]
USER-AGENT,FBiOSSDK*,ADS
DOMAIN-SUFFIX,connect.facebook.net,ADS
DOMAIN-SUFFIX,discovery.api.zaloapp.com,ADS
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Facebook.list,Facebook
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/GoogleDrive.list,FINAL
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/YouTubeMusic.list,MEDIA
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Youtube.list,MEDIA
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Spotify.list,MEDIA
RULE-SET,https://raw.githubusercontent.com/nzw9314/Surge/master/Ruleset/TikTok.list,TikTok
RULE-SET,https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-surge-exceptions-rule.conf,FINAL
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Direct.list,FINAL
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Speedtest.list,SPEEDTEST
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Kakaotalk.list,ADS
RULE-SET,https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-surge-rewrite.conf,ADS
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/BlockOTA.list,ADS
RULE-SET,https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-surge-rule.conf,ADS
RULE-SET,https://raw.githubusercontent.com/langkhach270389/Scripting/master/Surge/rules/Antirevoke.list,ADS
AND,((DOMAIN,raw.githubusercontent.com), (USER-AGENT,Surge*)),FINAL,notification-text="♻️External Resources Update",notification-interval=3600
IP-CIDR,0.0.0.0/32,REJECT,no-resolve
# GEOIP,VN,FINAL
RULE-SET,LAN,FINAL
FINAL,FINAL,dns-failed

[Host]
lightning-sign.com = server:8.8.8.8
*.nordvpn.com = server:8.8.8.8
*dropbox* = server:8.8.8.8
*.ipv6.nextdns.io = server:0.0.0.0
*ess.apple.com = server:8.8.8.8
*.google.com = server:8.8.8.8
*.icloud.com = server:8.8.8.8
in.appcenter.ms = server:8.8.8.8
*.apple.com = server:8.8.8.8
*.crashlytics.com = server:8.8.8.8
ip6-localhost = ::1
ip6-loopback = ::1

[URL Rewrite]
(?<=_region=)CN(?=&) JP 307
(?<=&app_version=)16..(?=.?.?&) 1 307
(?<=\?version_code=)16..(?=.?.?&) 1 307

[SSID Setting]
"XSM-iPhone" cellular-mode=true
