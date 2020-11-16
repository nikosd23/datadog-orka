# datadog-orka
Integration of datadog agent with @workable/orka

## to use the test route
```
curl -X POST \
  http://localhost:3000/test \
  -H 'account_id: 1' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'user_id: 1' \
  -d '{
	"bodyAttributeA": "a",
	"bodyAttributeB": "b"
}'
```
