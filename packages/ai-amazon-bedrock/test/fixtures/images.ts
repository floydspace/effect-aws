/// <reference types="node" />
import { deflateSync } from "node:zlib";

type Rgb = readonly [red: number, green: number, blue: number];

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return c >>> 0;
});

const crc32 = (bytes: Uint8Array): number => {
  let c = 0xffffffff;
  for (const byte of bytes) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type: string, data: Buffer): Buffer => {
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
};

/** Encodes a square RGB PNG whose pixels come from `pixel`. */
export const png = (size: number, pixel: (x: number, y: number) => Rgb): Buffer => {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8; // bit depth
  header[9] = 2; // colour type: RGB
  const rowLength = 1 + size * 3;
  const pixels = Buffer.alloc(size * rowLength);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      pixels.set(pixel(x, y), y * rowLength + 1 + x * 3);
    }
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(pixels)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
};

/**
 * A blue circle on a white background. Some vision models can't name the
 * colour of a flat single-colour image, and others pad small images onto a
 * white canvas, so the test image has a shape and a few hundred pixels.
 */
export const blueCirclePng = (size = 512): Buffer =>
  png(size, (x, y) => {
    const center = size / 2;
    return (x - center) ** 2 + (y - center) ** 2 <= (size / 3) ** 2 ? [0, 0, 255] : [255, 255, 255];
  });
