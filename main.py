import requests
from pprint import pprint
response = requests.get('https://api.mcstatus.io/v2/status/java/mc.thefoxxstuff.net')
if response.status_code == 200:
    data = response.json()
    print(f'{data["online"]}')
    print(f'{data["version"]["name_raw"]}')
    print(f'{data["host"]}')
    print(f'{data["srv_record"]["host"]}, {data["srv_record"]["port"]}')
    print(f'{data["motd"]["clean"]}')