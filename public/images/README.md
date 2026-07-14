# images

Place the attorney's portrait here as:

    resad-bayramov.png

Requirements:
- Square (1:1), ~640×640px or larger
- Subject: Rəşad Bayramov, face positioned toward the upper third of the frame
  (the layout crops with `object-position: 50% 20%`)

The duotone / editorial treatment is applied in CSS (`.portrait-frame` in
`app/globals.css`) — do NOT pre-edit the file to greyscale; upload the natural
colour photo and the site handles the treatment.

If this file is missing, the site renders a solid ink block with the serif
initials "RB" instead of a broken image (see `components/Portrait.tsx`).
