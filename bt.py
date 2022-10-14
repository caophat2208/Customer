import numpy as np
def bpcuctieu(a): # >>> dulieu = [10.0, 8,7,5,2] >>> bpcuctieu(dulieu)
    b = []
    o1 = []
    for i in range(len(a)):
        o1.append(1.0)  
        b.append((i+1)*1.0)
    x = np.array([o1, b]) # xay dung ma tran de tinh
    u = np.dot(x, x.T) # luu y truong hop nay nguoc lai!!!
    y = np.array(a)
    from numpy import linalg
    u_1 =np.linalg.inv(u)
    v = np.dot(u_1, x) # khong can x.T nhe
    A = np.dot(v, y)
    return A