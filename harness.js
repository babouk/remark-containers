var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')
var report = require('vfile-reporter')

var containers = require('./src/index')


var processor = unified()
   .use(markdown)
   .use(containers)
   .use(remark2rehype)
   .use(html)


processor.process(`

# header one

Some text and stuff. 

::: figure figure-table
one | two | three
---|---|---
a | b | c
::: figcaption
Tested nested containers
:::
:::

and there is more stuff after.

`, function(err, file) {
   console.error(report(err || file))
   console.log(String(file))
})
