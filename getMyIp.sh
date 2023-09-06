#! /bin/sh
ifconfig | grep -w inet | grep -v "127.0.0.1" | tr -d '\t'  | awk '{print $2}'| head -1
