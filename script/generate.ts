import { execSync } from 'node:child_process';
import { platform } from 'node:os';

let pluginPath = '';
if (platform() === 'win32') {
  pluginPath =
    ' --plugin=protoc-gen-ts_proto=.\\node_modules\\.bin\\protoc-gen-ts_proto.cmd ';
} else {
  pluginPath = `--plugin=./node_modules/.bin/protoc-gen-ts_proto`;
}

const windowsSh = `protoc ${pluginPath}\
    --ts_proto_opt=context=false --ts_proto_opt=forceLong=long \
    --ts_proto_opt=esModuleInterop=false \
    --ts_proto_opt=outputEncodeMethods=true --ts_proto_opt=outputJsonMethods=true \
    --ts_proto_opt=outputPartialMethods=true \
    --ts_proto_opt=env=node  \
    --ts_proto_out=./proto \
    -I ./proto \
./proto/test.proto`;

execSync(windowsSh, { encoding: 'utf8' });
