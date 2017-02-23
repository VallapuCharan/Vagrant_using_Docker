FROM ubuntu:14.04
 
RUN mkdir /u01 &amp;&amp; \
chmod a+xr /u01
COPY /files/readme.txt /u01/