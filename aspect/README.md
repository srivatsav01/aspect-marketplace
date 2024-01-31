
# Sample Aspect

## Instruction

This is a sample project of Artela Aspect. 

## Files

```bash
.
├── README.md
├── asconfig.json
├── aspect                 <-- Your aspect code resides here
│   └── index.ts
├── contracts                  <-- Place your smart contracts here
├── scripts                    <-- Utility scripts, including deploying, binding and etc.
│   ├── aspect-deploy.cjs
│   ├── bind.cjs
│   ├── contract-call.cjs
│   └── contract-deploy.cjs
...
```

# Useful links

* [@artela/aspect-tools](https://docs.artela.network/develop/reference/aspect-tool/overview)


Contract address: 0xD1E33991b7E0998cb5DB61CC60d8297deb9b70Bb
Aspect Address: 0x1d32582793CA312ee73b8F073720b0b86360D948

npm run contract:bind -- --contract 0xD1E33991b7E0998cb5DB61CC60d8297deb9b70Bb \
                         --abi ./build/contract/HelloWorld.abi \
                         --aspectId 0x1d32582793CA312ee73b8F073720b0b86360D948

npm run contract:call -- --contract  0xD1E33991b7E0998cb5DB61CC60d8297deb9b70Bb \
                         --abi ./build/contract/HelloWorld.abi   \
                         --method world 