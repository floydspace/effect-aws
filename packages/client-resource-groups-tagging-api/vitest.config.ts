import { mergeConfig, type ViteUserConfigExport as UserConfigExport } from "vitest/config";
import configShared from "../../vitest.shared.js";

const config: UserConfigExport = {};

export default mergeConfig(configShared, config);
