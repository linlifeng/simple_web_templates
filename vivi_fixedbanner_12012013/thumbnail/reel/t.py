import glob
from os import system


file_list = glob.glob('./*.jpg')

for f in file_list:
	print(f.split(' ')[0] + '.jpg', f)
	cmd = "mv %s %s" % (f.replace(" ", "\ ").replace("(", "\(").replace(")", "\)"), f.split(' ')[0] + '.jpg')
	print(cmd)
	system(cmd)
