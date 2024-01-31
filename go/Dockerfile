FROM golang AS builder

WORKDIR /app
COPY ./*.go .
RUN go mod init fullcycle
RUN go build fullcycle.go 

FROM scratch
WORKDIR /app
COPY --from=builder ./app/fullcycle ./fullcycle
ENTRYPOINT [ "/app/fullcycle" ]