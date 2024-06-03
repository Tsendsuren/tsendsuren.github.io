---
title: 'Running HR4000 Spectrometer with Python'
date: 2024-06-03
permalink: /posts/2024-06-03-OceanOptics/

---
# Intro
Ocean Optics spectrometers are a staple in many laser labs, known for their high quality. However, their reliance on proprietary software and drivers can be cumbersome. Fortunately, Python offers a flexible and customizable alternative for controlling these devices and acquiring spectrum data.

With a simple Python script, you can bypass the need for Ocean Optics' software and drivers, and directly interface with your spectrometer. This approach streamlines your workflow and empowers you to tailor the data collection process to your specific experimental needs.

In my own research, I wrote a simple Python code snippet that seamlessly connects to the Ocean Optics HR4000 spectrometer and retrieves spectral readouts. By incorporating this code into your experiments, you can unlock a more efficient and adaptable way to work with your spectrometer.

## Getting Started

Before you can use this program to interact with your OceanOptics HR4000 spectrometer, you'll need to install the `python-seabreeze` library. This library serves as a bridge between the spectrometer hardware and your Python code, enabling seamless communication and data retrieval.

### Installation

1. **Install `python-seabreeze`**:

   To get started, you can install `python-seabreeze` using the following pip command:

   ```bash
   pip install seabreeze

Refer to the python-seabreeze documentation for more detailed installation instructions and to ensure compatibility with your operating system.

### Using the Program
Once you've successfully installed python-seabreeze, you can run the program to connect with your OceanOptics HR4000 spectrometer. 

### Live Spectrum Display
As you work with your OceanOptics HR4000 spectrometer, the program will continuously retrieve and display the real-time spectral data. This live spectrum display makes it incredibly convenient to monitor and analyze your data as you work with your setup.


```python
import matplotlib.pyplot as plt
import numpy as np
import time
from seabreeze.spectrometers import Spectrometer, list_devices

devices = list_devices()
print(devices)
spec = Spectrometer(devices[0])

# Set integration time if needed
int_time = spec.integration_time_micros(10000)

wavelengths = spec.wavelengths()
intensities = spec.intensities()

# data = np.column_stack((wavelengths, intensities))
# fname = "bg_spectrum.txt"
# np.savetxt(fname, data, delimiter='\t')

# bg_data = np.loadtxt('bg_spectrum.txt')
# bg_signal = bg_data[:,1]

fig, ax = plt.subplots()
while True:
    intensities = spec.intensities()
    # intensities = intensities-bg_signal
    ax.clear()
    ax.plot(wavelengths,intensities,'r')
    ax.set_xlabel('Wavelength (nm)')
    ax.set_ylabel('Intensity (arb.unit)')
    ax.set_xlim(200,1100)
    # ax.set_ylim(0,7000)
    plt.grid()
    plt.pause(0.1)
    
    if plt.waitforbuttonpress(timeout=0.1):
        break

plt.show()
```