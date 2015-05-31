default:
	pdflatex -shell-escape -interaction=nonstopmode cosc3000_p2_report.tex > /dev/null
	@ echo Updated at $$(date +"%r")

clean:
	rm /tmp/*.aux /tmp/*.log
	
defunct:
	# pdflatex -shell-escape -interaction=nonstopmode -output-directory=/tmp *.tex > /dev/null
	# pdflatex -shell-escape -interaction=nonstopmode  *.tex > /dev/null
	# mv /tmp/*.pdf ./
