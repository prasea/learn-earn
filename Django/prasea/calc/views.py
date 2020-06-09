from django.shortcuts import render

# Create your views here.
def form(request):
    return render(request, 'form.html')
# This function shows the result
def calc(request):
    val1 =  int(request.GET['num1'])
    val2 =  int(request.GET['num2'])
    sum = val1 + val2

    return render(request, 'calc_result.html', {'result': sum})