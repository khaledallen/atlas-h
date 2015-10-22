#Get the starting temperature's scale
input_scale = 'e'
while input_scale != 'C' and input_scale != 'F':
    print ('Temperature scale must be F or C.')
    input_scale = input ('Starting temperature scale (F/C?)')
    input_scale = input_scale.upper()
    print (input_scale)

temp = input ('What is the temperature?')
if input_scale == 'F':
        output_scale = 'C'
        result = (int(temp)-32) * (5/9)
if input_scale == 'C':
        output_scale = 'F'
        result = (int(temp) * 1.8) + 32

#calculate the temperature conversion
print ('The starting temperature was ' + temp + ' degrees ' + str(input_scale) + '.')
print ('The temperature in degrees ' + output_scale + ' is ' + str(result) + '.')
