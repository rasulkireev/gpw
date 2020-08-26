---
title: "Running asyncio in Jupyter"
category: Python
id: 84cbec20ab154a0abe5ecaf05c182ff9
parent_id: 73db0710603b41609d6ac9a2a4d17dc8
created_at: 1591815379723
---

06/10/2020 14:58

https://stackoverflow.com/questions/55409641/asyncio-run-cannot-be-called-from-a-running-event-loop

When you are running asyncio code in jupyter you don't need to do:

```python
asyncio.run(main())
```

or

```python
loop = asyncio.get_event_loop()
try:
    loop.run_until_complete(main())
finally:
    loop.close()
```

You can simply call

`await main()`

    