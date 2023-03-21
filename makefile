generate:
	protoc --plugin=node_modules/ts-proto/protocc-gen-ts_proto \
		--ts_proto_opt=context=false --ts_proto_opt=forceLong=long \
		--ts_proto_opt=esModuleInterop=false \
		--ts_proto_opt=outputEncodeMethods=true --ts_proto_opt=outputJsonMethods=true \
		--ts_proto_opt=outputPartialMethods=true \
		--ts_proto_opt=env=node  \
		--ts_proto_out=./proto \
		-I ./proto \
		./proto/test.proto