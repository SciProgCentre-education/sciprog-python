CMAKE_MINIMUM_REQUIRED(VERSION 3.9 FATAL_ERROR)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

PROJECT(sciprog-protobuf)

find_package(Protobuf REQUIRED)
include_directories(${Protobuf_INCLUDE_DIRS})

PROTOBUF_GENERATE_CPP(PROTO_SRCS PROTO_HDRS example.proto)

protobuf_generate_python(PY_SOURCES example.proto)
add_custom_target(py_proto ALL DEPENDS ${PY_SOURCES})

ADD_EXECUTABLE(proto_example.exe proto_main.cpp
        ${PROTO_SRCS} ${PROTO_HDRS})

target_include_directories(proto_example.exe
        PUBLIC
        ${CMAKE_CURRENT_BINARY_DIR}
        )

TARGET_LINK_LIBRARIES(proto_example.exe ${Protobuf_LIBRARIES})