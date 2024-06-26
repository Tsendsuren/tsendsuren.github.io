---
title: 'Atomic units and handy formulas'
date: 2024-06-04
permalink: /posts/2024-06-03-au_conversion/
---

# Atomic units
### Laser intensity conversion

```python
Intensity [au] = Intensity [W.cm2] / 3.51e16 
```

### Electric field strength
```python
E [au] = E [V/m] / 5.14e11
```

### Energy conversion
```python
Energy [au] = Energy [eV] / 27.21
```

### Time conversion
```python
t [au] = t [fs] * 1000 / 24.2
```

### Wavelength conversion
```python
lambda [au] = lambda [nm] * 18.89
```

### Angular frequency
```python
omega [au] = 45.56 / lambda [nm]
```


# Useful formulas in ultrafast physics

### Wavelength-energy conversion

$$ E [\mathrm{eV}] = \frac{1240}{\lambda [\mathrm{nm}]}$$

### Ponderomotive energy

$$ U_{p}=\frac{I}{4\omega^{2}} $$