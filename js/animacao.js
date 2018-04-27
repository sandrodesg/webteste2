// 1 - identificar quando o usuario ultiliza  scroll
// 2 - calcular a distancia entre o topo da pagina e o scroll
// 3 - calcular a distancia entre o topo da pagina e o elemento que deseja animar
// 4 - comparar as duas distancias anteriores
// 5 - adicionar uma classe com css animation ou transsition ao elemento animado

//suavidade no scroll

$('.suav a').click(function(e){
	e.preventDefault();
});

// Retorna uma função, que, enquanto continua a ser invocada, não 
//será ativada. A função será chamada depois que ele não seja chamado para 
// N milissegundos. Se `` imediato` for passado, desencadeie a função na 
// vantagem, em vez da partida. 
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
	var #target = $('.anime'),
	    animationClass = 'anime_start',
	offset = $(window).height() * 3/4;

	function animeScroll(){
		var documentTop = $(document).scrollTop();/*calculando distancia entro o topo e o scroll*/

		$target.each(function(){                 /*selecoando cada elemento para animar um de cada vez*/
			var itemTop = $(this).offset(),top;
			if(documentTop > itemTop){
				$(this).addClass('animationClass');

			}else{

				$(this).removeClass(animationClass);
			}
		})
	}
	animeScroll();

	$(documet).scroll(function(){
		animeScroll();
	})
}());