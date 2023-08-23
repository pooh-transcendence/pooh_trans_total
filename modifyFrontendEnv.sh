#! /bin/sh

if [ $# -ne 1 ]; then
	echo "$0 need 1 parameter";
	exit 1;
fi
filename="./srcs/env/frontend.env"
backend_ip_key="BACKEND_IP"
new_backend_ip_value=$1

grep -q "^$backend_ip_key=" "$filename"

if [ $? -eq 0 ]; then
	sed -i '' -e  "s/^$backend_ip_key=.*/$backend_ip_key=$new_backend_ip_value/" "$filename"
else
    # BACKENDIP key가 없으면 새로 추가
    echo "$backend_ip_key=$new_backend_ip_value" >> "$filename"
fi
