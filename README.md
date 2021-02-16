### Build Dockeriamge

```
docker build -t hugo .
```


### Run locally

```
docker run --rm -it -p1313:1313 -v $(pwd):/src hugo server -D
```

### Build static

```
docker run --rm -it -p1313:1313 -v $(pwd):/src hugo server -D -d ./public
```