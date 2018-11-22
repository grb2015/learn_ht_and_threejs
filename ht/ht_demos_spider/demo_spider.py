# -*- coding: utf-8 -*-
# @Author: Teiei
# @Date:   2018-11-19 22:24:05
# @Last Modified by:   Teiei
# @Last Modified time: 2018-11-19 22:24:33
import re
import requests
import urllib,codecs,csv
from bs4 import BeautifulSoup
import datetime

def  get_metro():
	url = 'http://www.hightopo.com/demos/index.html'
	req = requests.get(url)
	html = req.text

	soup = BeautifulSoup(html)
	ul_tag0 = soup.find_all('ul','stores')[0]
	#print(ul_tag0)

	soup = BeautifulSoup(str(ul_tag0))
	with codecs.open('china_offical_metro.csv', 'w+', encoding='utf-8') as market_file:
		writer = csv.writer(market_file)
		writer.writerow(["品牌","商场名","地址"])

		li_tags = soup.find_all('li')
		for li_tag in li_tags:
			info_list =[]
			a_tag  = li_tag.a
			soup = BeautifulSoup(str(a_tag))
			span_tags = soup.find_all('span')
			info = span_tags[3].string
			''' span_tags[3] = 
			    					<span class="desc">
	                                    山东省淄博市张店区山泉路102号,
	                                    255051,
	                                    华北 - 淄博张店商场
	                                </span>

			'''
			info  = info.split(',')		
			name = info[2]
			addr = info[0]
			name = re.match(r'\r\n\s+(.+?)\r\n', name).group(1)
			addr = re.match(r'\r\n\s+(.+?)$', addr).group(1) ## 这里如果不加就不行，why?
			info_list.append('麦德龙')
			info_list.append(name)
			info_list.append(addr)
			'''
			如果不加正则那么会有换行和空格，如下
			['麦德龙', '\r\n     华北 - 淄博张店商场\r\n     ', '\r\n    山东省淄博市张店区山泉路102号']
			'''
			print(info_list)
			writer.writerow(info_list)

if __name__ == '__main__':
	get_metro();