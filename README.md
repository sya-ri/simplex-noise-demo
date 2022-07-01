# simplex-noise-demo

A web app for trying out texture generation using simplex-noise.

## What's simplex-noise?

> Simplex noise is the result of an n-dimensional noise function comparable to Perlin noise ("classic" noise) but with fewer directional artifacts and, in higher dimensions, a lower computational overhead.
>
> https://en.wikipedia.org/wiki/Simplex_noise

> Perlin noise is a procedural texture primitive, a type of gradient noise used by visual effects artists to increase the appearance of realism in computer graphics. The function has a pseudo-random appearance, yet all of its visual details are the same size. This property allows it to be readily controllable; multiple scaled copies of Perlin noise can be inserted into mathematical expressions to create a great variety of procedural textures. Synthetic textures using Perlin noise are often used in CGI to make computer-generated visual elements – such as object surfaces, fire, smoke, or clouds – appear more natural, by imitating the controlled random appearance of textures in nature.
> 
> https://en.wikipedia.org/wiki/Perlin_noise

## Web app

[https://gh.s7a.dev/simplex-noise-demo](https://gh.s7a.dev/simplex-noise-demo)

It uses Math.random, so you'll see a similar but different texture each time you load the page.
You can also regenerate it with the reload icon.

![](readme-assets/preview.png)

Press the gear icon to open the settings screen.

![](readme-assets/settings.png)

## Behavior overview

Several files are in the src folder, but you can understand simplex-noise texture generation by reading [NoisePreview.tsx](src/components/NoisePreview.tsx).

```tsx
export type NoisePreviewProps = {
  width: number
  height: number
  stepX: number
  stepY: number
  cellWidth: number
  cellHeight: number
  simplex: SimplexNoise
}

const NoisePreview: FC<NoisePreviewProps> = ({ width, height, stepX, stepY, cellWidth, cellHeight, simplex }) => {
  return (
    <Box maxW="full">
      {Array.from({ length: height }, (_y, y) => (
        <Flex key={y}>
          {Array.from({ length: width }, (_x, x) => {
            // Convert a value from -1 to 1 to 0 to 1.
            // After that, multiply 0 to 1 by 100 and convert to a percentage.
            const noise = simplex.noise2D(x * stepX, y * stepY)
            return (
              <Tooltip key={x} label={`(${x}, ${y}): ${noise}`} hasArrow placement="top">
                <Box w={cellWidth} h={cellHeight} bg={`hsl(0, 0%, ${(100 * (noise + 1)) / 2.0}%)`} flexShrink={0} />
              </Tooltip>
            )
          })}
        </Flex>
      ))}
    </Box>
  )
}
```

1. Generate a two-dimensional array by `width` and `height`.
2. Run `simplex.noise2D(x * stepX, y * stepY)` with indexes `x` and `y`.
3. `simplex#noise2D` returns one of the value -1 to 1.
4. Convert the value from 0 to 1 with `(noise + 1) / 2.0`.
5. hsl needs a percentage, so multiply by 100.

## License

This web app is released under the MIT License, see [LICENSE](LICENSE).
