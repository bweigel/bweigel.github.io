FROM klakegg/hugo:0.80.0-debian

RUN apt-get update -y && apt-get install -y python3-pip
RUN pip3 install rst2html