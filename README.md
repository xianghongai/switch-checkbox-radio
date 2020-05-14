# Switch & Checkbox & Radio

层级清晰、不依赖 JavaScript 的 Switch、Checkbox、Radio 三个 Input UI。

![](https://user-images.githubusercontent.com/58411528/81953914-cf651800-963a-11ea-9a8d-63712a24dab2.gif)

## switch

```
.hs-switch__wrapper
    .hs-switch
        .hs-switch__input
        .hs-switch__toggle
        .hs-switch__animating
```

```html
<label class="hs-switch__wrapper">
  <div class="hs-switch animate">
    <input class="hs-switch__input" type="checkbox" />
    <i class="hs-switch__toggle"></i>
    <span class="hs-switch__animating"></span>
  </div>
</label>
```

## checkbox

```
.hs-checkbox__wrapper
    .hs-checkbox
        .hs-checkbox__input
        .hs-checkbox__toggle
```

```html
<label class="hs-checkbox__wrapper">
  <div class="hs-checkbox">
    <input class="hs-checkbox__input" type="checkbox" />
    <i class="hs-checkbox__toggle"></i>
  </div>
  span
</label>
```

## radio

```
.hs-radio__wrapper
    .hs-radio
        .hs-radio__input
        .hs-radio__toggle
```

```html
<label class="hs-radio__wrapper">
  <div class="hs-radio animate">
    <input class="hs-radio__input" type="radio" name="group" />
    <i class="hs-radio__toggle"></i>
  </div>
</label>
```

1. 使用 `input[checked|disabled]` 生效交互

    `<input class="hs-checkbox__input" type="checkbox" checked disabled />`

2. 在 `hs-switch`/`hs-checkbox`/`hs-radio` 层设置字体大小 (font-size) 可调整尺寸

## Browser support

- `::after, ::before` Pseudo-elements
- `:checked, :disabled, :not()` Pseudo-classes
- `selector+selector`
- `selector~selector`
- `selector:not()`
- `transform`
- `transition`
- `animation`
- `border-radius`
- `box-sizing`