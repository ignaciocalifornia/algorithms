Some algorithms implemented in Javascript


To execute the algorithms, have node install and run: 
```
$ node backpack.js
$ node n-queens.js

```

Adding a deployment:
```
POST https://api.github.com/repos/ignaciocalifornia/algorithms/deployments
Authorization: token ...
{
  "ref": "test-branch"
  "environment": "stage"
  "description": "issue https://github.com/ignaciocalifornia/algorithms/issues/1"
}
```

New Commit


commit in master1
commit in master2
commit in test-master2
