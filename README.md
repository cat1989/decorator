## Decorator

```javascript
function greeting() {
	console.log('Hello world!');
}

const ms = 1000;
```

* Delaying decorator

```javascript
const wrapper = delay(greeting, ms);

wrapper();
```

* Debounce decorator

```javascript
const wrapper = debounce(greeting, ms);

wrapper();
```

* Throttle decorator

```javascript
const wrapper = throttle(greeting, ms);

wrapper();
```

