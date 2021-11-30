import pathlib
import zipfile
from zipfile import ZipFile

# https://docs.python.org/3/library/zipfile.html
# ZIP Bombs!!!

if __name__ == '__main__':
    with ZipFile('spam.zip', 'w', compresslevel=9) as myzip:
        for path in pathlib.Path(".").iterdir():
            if path.is_file() and path.suffix != ".zip":
                myzip.write(path)
        myzip.printdir()
    print()
    with zipfile.PyZipFile("prog.zip", "w") as zf:
        zf.writepy(".")
        zf.printdir()