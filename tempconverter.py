#Get the starting temperature's scale

input_scale = raw_input ('Starting temperature scale (F/C?)')

while input_scale.upper() != 'C' and input_scale.upper() != 'F':
        print (input_scale)
    print ('Temperature scale must be F or C, Try again')

temp = input ('What is the temperature?')

result = (((int(temp)-32) * (5/9)) if input_scale == 'F' else ((int(temp) * 1.8) + 32)

#calculate the temperature conversion
print ('The starting temperature was ' + str(temp) + ' degrees ' + str(input_scale) + '.')
print ('The temperature in degrees ' + str('F' if input_scale = 'C' else 'F') + ' is ' + str(result) + '.')
