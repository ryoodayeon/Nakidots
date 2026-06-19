const GROUPS = [
  // ── Moving Image / Studio ──────────────────────────
  {
    major: 'Moving Image',
    mid:   'Studio',
    sub:   'Before the first shot',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['1studio-1.jpg','1studio-2.jpg','1studio-3.jpg','1studio-4.jpg',
            '1studio-5.jpg','1studio-6.jpg','1studio-7.jpg'],
  },
  {
    major: '', mid: '', sub: 'Handheld lights, table, body rising',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['2studio-1.jpg','2studio-2.jpg','2studio-3.jpg','2studio-4.jpg','2studio-5.jpg'],
  },
  {
    major: '', mid: '', sub: 'A good kind of behind-the-scenes',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['3studio-1.jpg','3studio-2.jpg','3studio-3.jpg','3studio-4.jpg','3studio-5.jpg'],
  },
  {
    major: '', mid: '', sub: 'The crew in motion',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['4studio-1.jpg','4studio-2.jpg','4studio-3.jpg'],
  },
  {
    major: '', mid: '', sub: 'Thanks to Moseori',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['5studio-1.jpg','5studio-2.jpg','5studio-3.jpg','5studio-4.jpg',
            '5studio-5.jpg','5studio-6.jpg','5studio-7.jpg'],
  },
  {
    major: '', mid: '', sub: 'With the map of the moon',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['6studio-1.jpg','6studio-2.jpg'],
  },
  {
    major: '', mid: '', sub: 'Dance, then disappear',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['7studio-1.jpg','7studio-2.jpg','7studio-3.jpg','7studio-4.jpg'],
  },
  {
    major: '', mid: '', sub: 'Props and traces behind',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['8studio-1.jpg','8studio-2.jpg','8studio-3.jpg','8studio-4.jpg'],
  },

  // ── Moving Image / Oil Tank Culture Park ──────────────────────────
  {
    major: 'Moving Image',
    mid:   'Oil Tank Culture Park',
    sub:   'Lunch break',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['1culture-1.jpg','1culture-2.jpg','1culture-3.jpg','1culture-4.jpg'],
  },
  {
    major: '', mid: '', sub: 'Hard working, still moving',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['2culture-1.jpg','2culture-2.jpg','2culture-3.jpg','2culture-4.jpg','2culture-5.jpg'],
  },
  {
    major: '', mid: '', sub: 'The steady lighting man and Yeonho trying hard',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['3culture-1.jpg','3culture-2.jpg','3culture-3.jpg'],
  },
  {
    major: '', mid: '', sub: 'Fragments of the shoot',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['4culture-1.jpg','4culture-2.jpg','4culture-3.jpg','4culture-4.jpg',
            '4culture-5.jpg','4culture-6.jpg','4culture-7.jpg','4culture-8.jpg'],
  },
  {
    major: '', mid: '', sub: 'At the same time',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['5culture-1.jpg','5culture-2.jpg'],
  },
  {
    major: '', mid: '', sub: 'Second look, second skin',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['6culture-1.jpg','6culture-2.jpg','6culture-3.jpg','6culture-4.jpg'],
  },
  {
    major: '', mid: '', sub: 'Thanks to Tiles',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['7culture-1.jpg','7culture-2.jpg','7culture-3.jpg','7culture-4.jpg',
            '7culture-5.jpg','7culture-6.jpg'],
  },
  // ── Moving Image / Seonyudo Park ──────────────────────────
  {
    major: 'Moving Image',
    mid:   'Seonyudo Park',
    sub:   'The long march through mud',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['1sun-1.jpg','1sun-2.jpg','1sun-3.jpg','1sun-4.jpg'],
  },
  {
    major: '', mid: '', sub: 'Climbing into the scene',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['2sun-1.jpg','2sun-2.jpg','2sun-3.jpg','2sun-4.jpg',
            '2sun-5.jpg','2sun-6.jpg','2sun-7.jpg'],
  },
  {
    major: '', mid: '', sub: 'Small acrobatics',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['3sun-1.jpg','3sun-2.jpg','3sun-3.jpg'],
  },
  {
    major: '', mid: '', sub: 'Shooting until night',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['4sun-1.jpg','4sun-2.jpg','4sun-3.jpg','4sun-4.jpg',
            '4sun-5.jpg','4sun-6.jpg','4sun-7.jpg'],
  },
  {
    major: '', mid: '', sub: 'The flashlight did everything',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['5sun-1.jpg','5sun-2.jpg','5sun-3.jpg'],
  },
  {
    major: '', mid: '', sub: 'Thanks to Hairymask',
    base:  'images/behind/moving_image/compressed/',
    imgs:  ['6sun-hairy1.jpg','6sun-hairy2.jpg','6sun-hairy3.jpg'],
  },
  // ── Prop Construction / In the Prototyping Room ──────────────────────────
  {
    major: 'Prop Construction',
    mid:   'In the Prototyping Room',
    sub:   'Attachment Map',
    base:  'images/behind/props/compressed/',
    imgs:  ['map1.jpg','map2.jpg','map3.jpg','map4.jpg','map5.jpg',
            'map6.jpg','map7.jpg','map8.jpg','map9.jpg','map10.jpg'],
  },
  {
    major: '', mid: '', sub: 'Flag',
    base:  'images/behind/props/compressed/',
    imgs:  ['flag1.jpg','flag2.jpg'],
  },
  {
    major: '', mid: '', sub: 'Table, Also a Light',
    base:  'images/behind/props/compressed/',
    imgs:  ['table1.jpg','table2.jpg','table3.jpg','table4.jpg',
            'table5.jpg','table6.jpg','table7.jpg'],
  },
  {
    major: '', mid: '', sub: 'And Others',
    base:  'images/behind/props/compressed/',
    imgs:  ['autre1.jpg','autre2.jpg','autre3.jpg'],
  },
    // ── Prop Construction / Departure Before Dawn ──────────────────────────
    {
      major: 'Prop Construction',
      mid:   'Departure Before Dawn',
      sub:   'Attachment Map',
      base:  'images/behind/props/compressed/',
      imgs:  ['final1.jpg','final2.jpg'],
    },
    {
      major: '', mid: '', sub: 'What Remained with Dayeon After the Shoot',
      base:  'images/behind/props/compressed/',
      imgs:  ['img_6238.jpg'],
    },
  // ── Styling Preparation / Look Selection ──────────────────────────
  {
    major: 'Styling Preparation',
    mid:   'Look Selection',
    sub:   'Look 1',
    base:  'images/behind/Styling/compressed/',
    imgs:  ['1look-1.jpg','1look-2.jpg','1look-3.jpg','1look-4.jpg'],
  },
  {
    major: '', mid: '', sub: 'Look 2',
    base:  'images/behind/Styling/compressed/',
    imgs:  ['2look-1.jpg','2look-2.jpg','2look-3.jpg'],
  },
  {
    major: '', mid: '', sub: 'Look 3',
    base:  'images/behind/Styling/compressed/',
    imgs:  ['3look-1.jpg','3look-2.jpg',,'img_5598.jpg'],
  },

    // ── Styling Preparation / Special Thanks To ──────────────────────────
    {
      major: 'Styling Preparation',
      mid:   'Special Thanks To',
      sub:   'Aloha Polydor',
      base:  'images/behind/Styling/compressed/',
      imgs:  ['pickup1.jpg','pickup2.jpg'],
    },
    {
      major: '', mid: '', sub: 'Parkhyunjae',
      base:  'images/behind/Styling/compressed/',
      imgs:  ['img_5601.jpg','img_5626.jpg'],
    },
    {
      major: '', mid: '', sub: 'Our Precious Stylist',
      base:  'images/behind/Styling/compressed/',
      imgs:  ['img_6057.jpg'],
    },

  // ── Film Documentation / Animals We Met ──────────────────────────
  {
    major: 'Film Documentation',
    mid:   'Animals We Met',
    sub:   null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC00158.jpg','DSC00161.jpg','DSC00165.jpg','DSC00166.jpg',
            'DSC00171.jpg','DSC00172.jpg','DSC00173.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC00242.jpg','DSC00243.jpg','DSC00245.jpg','DSC00246.jpg','DSC00249.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC00345.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC02471.jpg','DSC02472.jpg','DSC02473.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC02600.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC02614.jpg','DSC02617.jpg','DSC02618.jpg','DSC02627.jpg',
            'DSC02628.jpg','DSC02629.jpg','DSC02632.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC02743.jpg'],
  },
  {
    major: '', mid: '', sub: null,
    base:  'images/behind/film_documentation/animals/compressed/',
    imgs:  ['DSC02835.jpg','DSC02837.jpg'],
  },

  // ── Film Documentation / Texts We Met ────────────────────────────

  {
    major: 'Film Documentation', mid: 'Texts We Met', sub: 'Guryong Village',
    base:  'images/behind/film_documentation/texts/compressed/',
    imgs:  ['DSC02524.jpg','DSC02537.jpg','DSC02539.jpg',
            'DSC02540.jpg','DSC02541.jpg','DSC02547.jpg','DSC02549.jpg',
            'DSC02559.jpg','DSC02603.jpg','DSC02604.jpg'],
  },
  {
    major: '', mid: '', sub: 'Jangsa-dong',
    base:  'images/behind/film_documentation/texts/compressed/',
    imgs:  ['DSC02291.jpg'],
  },
  {
    major: '', mid: '', sub: 'Bogwang-dong',
    base:  'images/behind/film_documentation/texts/compressed/',
    imgs:  ['DSC00098.jpg','DSC00100.jpg','DSC00107.jpg','DSC00143.jpg',
            'DSC00295.jpg','DSC00316.jpg','DSC00317.jpg'],
  },
  {
    major: '', mid: '', sub: 'Hawolgok-dong',
    base:  'images/behind/film_documentation/texts/compressed/',
    imgs:  ['IMG_6877.jpg'],
  },
  {
    major: '', mid: '', sub: 'Jeonnong-dong',
    base:  'images/behind/film_documentation/texts/compressed/',
    imgs:  ['DSC00122.jpg','DSC00168.jpg','DSC00176.jpg'],
  },

  
  // ── Written Material / Yeonho & Dayeon ──────────────────────────
  {
    major: 'Written Material',
    mid:   'Yeonho & Dayeon',
    sub:   'Lyrics',
    base:  'images/behind/written/',
    imgs:  ['lyrics1.png','lyrics2.png'],
  },
  {
    major: '', mid: '', sub: 'Visual Ideation',
    base:  'images/behind/written/',
    imgs:  ['visual1.png','visual2.jpg','visual3.jpg'],
  },
  {
    major: '',
    mid:   '',
    sub:   'Logo',
    base:  'images/behind/written/',
    imgs:  ['logo1.jpg','logo2.jpg'],
  },

  // ── Exhibition ──────────────────────────────────────────────────
  {
    major: 'Exhibition',
    mid:   'Preparation',
    sub:   'Documentation',
    base:  'images/behind/written/',
    imgs:  ['exhibition1.jpg','exhibition2.jpg','exhibition3.jpg','exhibition3b.jpg'],
  },
  {
    major: '', mid: '', sub: 'Installation',
    base:  'images/behind/written/',
    imgs:  ['exhibition4.jpg','exhibition4-1.jpg','exhibition4-2.jpg','exhibition4-3.jpg'],
  },

  {
    major: '',
    mid:   '',
    sub:   'Print',
    base:  'images/behind/written/',
    imgs:  ['print1.jpg'],
  },
];

function isMobile() { return window.innerWidth <= 800; }

let openIdx = -1;
const entries = [];

// Drag scroll state
let isDragging  = false;
let dragStartX  = 0;
let dragScrollL = 0;
let dragStack   = null;

const archive = document.getElementById('archive');

GROUPS.forEach((group, idx) => {
  const entry = document.createElement('div');
  entry.className = group.major ? 'archive-entry entry-new-major' : 'archive-entry';

  const row = document.createElement('div');
  row.className = 'entry-row';

  const colMajor = document.createElement('div');
  colMajor.className = 'col-major';
  colMajor.textContent = group.major;

  const colMid = document.createElement('div');
  colMid.className = 'col-mid';
  colMid.textContent = group.mid;

  const colRight = document.createElement('div');
  colRight.className = 'col-right';

  if (group.sub) {
    const subLabel = document.createElement('span');
    subLabel.className = 'sub-label';
    subLabel.textContent = group.sub;
    colRight.appendChild(subLabel);
  }

  const stack = document.createElement('div');
  stack.className = 'img-stack';

  group.imgs.forEach(name => {
    const img = document.createElement('img');
    img.className = 'stack-thumb';
    img.src = group.base + name;
    img.alt = '';
    img.loading = 'lazy';
    stack.appendChild(img);
  });

  colRight.appendChild(stack);
  row.append(colMajor, colMid, colRight);
  entry.appendChild(row);

  // ── click: open / stay open ──────────────────────────────────────
  stack.addEventListener('click', e => {
    e.stopPropagation();
    if (openIdx !== idx) openStack(idx);
  });

  // ── drag scroll (mouse) ──────────────────────────────────────────
  stack.addEventListener('mousedown', e => {
    if (!stack.classList.contains('open')) return;
    isDragging  = true;
    dragStack   = stack;
    dragStartX  = e.clientX;
    dragScrollL = stack.scrollLeft;
    stack.style.cursor = 'grabbing';
    e.preventDefault();
  });

  // ── drag scroll (touch, desktop only — mobile uses native scroll) ──
  stack.addEventListener('touchstart', e => {
    if (isMobile() || !stack.classList.contains('open')) return;
    dragStack   = stack;
    dragStartX  = e.touches[0].clientX;
    dragScrollL = stack.scrollLeft;
  }, { passive: true });

  stack.addEventListener('touchmove', e => {
    if (isMobile() || !dragStack) return;
    const dx = e.touches[0].clientX - dragStartX;
    dragStack.scrollLeft = dragScrollL - dx;
  }, { passive: true });

  stack.addEventListener('touchend', () => {
    if (isMobile()) return;
    dragStack = null;
  });

  entries.push({ entry, stack });
  archive.appendChild(entry);
});

// ── global mouse handlers ────────────────────────────────────────
document.addEventListener('mousemove', e => {
  if (!isDragging || !dragStack) return;
  dragStack.scrollLeft = dragScrollL - (e.clientX - dragStartX);
});

document.addEventListener('mouseup', () => {
  if (dragStack) dragStack.style.cursor = '';
  isDragging = false;
  dragStack  = null;
});

// ── background click → close ─────────────────────────────────────
document.addEventListener('click', closeStack);

// ── open / close ─────────────────────────────────────────────────
function openStack(idx) {
  const switching = openIdx >= 0 && openIdx !== idx;
  if (switching) closeStackAt(openIdx);
  openIdx = idx;

  const doOpen = () => {
    const { entry, stack } = entries[idx];
    const rect = stack.getBoundingClientRect();
    const shift = rect.left - 20;

    stack.style.width     = (window.innerWidth - 20) + 'px';
    stack.style.overflow  = isMobile() ? 'scroll' : 'hidden';
    stack.style.transform = `translateX(-${shift}px)`;
    stack.classList.add('open');

    const r = entry.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight) {
      requestAnimationFrame(() => {
        entry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  };

  switching ? setTimeout(doOpen, 50) : doOpen();
}

function closeStack() {
  if (openIdx < 0) return;
  closeStackAt(openIdx);
  openIdx = -1;
}

function closeStackAt(i) {
  const { stack } = entries[i];
  stack.classList.remove('open');
  setTimeout(() => {
    stack.style.width     = '';
    stack.style.overflow  = '';
    stack.style.transform = '';
    stack.scrollLeft      = 0;
  }, 300);
}

// ── keyboard ────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (openIdx < 0) return;
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (openIdx > 0) openStack(openIdx - 1);
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (openIdx < GROUPS.length - 1) openStack(openIdx + 1);
  } else if (e.key === 'Escape') {
    closeStack();
  }
});
