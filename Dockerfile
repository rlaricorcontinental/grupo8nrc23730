FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/
COPY login.html /usr/share/nginx/html/
COPY dashboard.html /usr/share/nginx/html/

RUN mkdir -p /usr/share/nginx/html/assets

COPY assets/css /usr/share/nginx/html/assets/css/
COPY assets/js /usr/share/nginx/html/assets/js/

COPY rlaricor/ /usr/share/nginx/html/rlaricor/
COPY tm638231/ /usr/share/nginx/html/tm638231/
COPY AlfredoTisoc/ /usr/share/nginx/html/AlfredoTisoc/
COPY haroldsalazar/ /usr/share/nginx/html/haroldsalazar/
COPY perfraalahe/ /usr/share/nginx/html/perfraalahe/

RUN chmod -R 755 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
