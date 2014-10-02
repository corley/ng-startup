* NPM dependencies      [![Dependency Status](https://www.versioneye.com/user/projects/541050ce9e16226a93000034/badge.svg?style=flat)](https://www.versioneye.com/user/projects/541050ce9e16226a93000034)
* Bower dependencies    [![Dependency Status](https://www.versioneye.com/user/projects/541050ce9e162272b8000032/badge.svg?style=flat)](https://www.versioneye.com/user/projects/541050ce9e162272b8000032)

## Start
```sh
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ grunt watch
```

## Grunt configuration
```bash
cp ./configuration.json.dist ./configuration.json
```
* AWS credential

## Grunt Commands
* watch - Active livereload
* build - Prepare buil, compile JS, LESS, template..
* compile - Prepeare build
* bump - Bump new version
* test - Run karma conf
* s3 - deploy build dir in S3 bucket
