

TMP_FIFO=$HOME/.tmp_fifo

rm -f $TMP_FIFO ; mkfifo $TMP_FIFO
# 这是基于termux中的nc  而不是安卓自带的nc
cat  $TMP_FIFO  | /bin/bash  -i 2>&1 | nc  -k -l  127.0.0.1 1234 > $TMP_FIFO





nc     -N  127.0.0.1  1234  <<EOF

pwd
whoami
EOF